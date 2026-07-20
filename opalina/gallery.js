"use strict";

(() => {
    const layoutClasses = {
        full: "gallery-row--full",
        two: "gallery-row--two",
        twoWideLeft: "gallery-row--twoWideLeft",
        twoWideRight: "gallery-row--twoWideRight",
        three: "gallery-row--three"
    };

    const automaticLayouts = {
        1: "full",
        2: "two",
        3: "three"
    };

    const normaliseRows = (rows) => {
        if (!Array.isArray(rows)) return [];

        if (rows.every((item) => item && typeof item.src === "string")) {
            return rows.map((image) => ({ images: [image] }));
        }

        return rows.map((row) => Array.isArray(row) ? { images: row } : row);
    };

    const createImage = (image, isFeatured = false, onDimensionsReady) => {
        const element = document.createElement("img");
        element.alt = image.alt || "";
        element.decoding = "async";

        if (Number.isFinite(image.width)) element.width = image.width;
        if (Number.isFinite(image.height)) element.height = image.height;

        if (isFeatured) {
            element.fetchPriority = "high";
        } else {
            element.loading = "lazy";
            element.fetchPriority = "low";
        }

        let revealStarted = false;

        const syncIntrinsicDimensions = () => {
            if (element.naturalWidth <= 0 || element.naturalHeight <= 0) return;

            element.width = element.naturalWidth;
            element.height = element.naturalHeight;

            if (typeof onDimensionsReady === "function") {
                onDimensionsReady();
            }
        };

        const reveal = () => {
            if (revealStarted) return;
            revealStarted = true;
            syncIntrinsicDimensions();

            const showImage = () => {
                requestAnimationFrame(() => element.classList.add("is-loaded"));
            };

            if (typeof element.decode === "function") {
                element.decode().then(showImage).catch(showImage);
            } else {
                showImage();
            }
        };

        element.addEventListener("load", reveal, { once: true });
        element.addEventListener("error", () => {
            element.classList.add("is-error");
        }, { once: true });
        element.src = image.src;

        if (element.complete && element.naturalWidth > 0) reveal();

        return element;
    };

    const renderRows = (mount, rows) => {
        const fragment = document.createDocumentFragment();

        normaliseRows(rows).forEach((row) => {
            if (!row || !Array.isArray(row.images) || row.images.length === 0) return;

            const layout = row.layout || automaticLayouts[row.images.length];
            const layoutClass = layoutClasses[layout];

            if (!layoutClass) {
                console.warn("Gallery rows support one, two or three images, or a valid layout property.", row);
                return;
            }

            const rowElement = document.createElement("div");
            rowElement.className = `gallery-row ${layoutClass}`;

            const imageElements = [];

            const updateProportionalColumns = () => {
                if (row.images.length <= 1) return;

                const aspectRatios = row.images.map((image, index) => {
                    const element = imageElements[index];

                    if (element && element.naturalWidth > 0 && element.naturalHeight > 0) {
                        return element.naturalWidth / element.naturalHeight;
                    }

                    return image.width / image.height;
                });
                const hasValidRatios = aspectRatios.every((ratio) => Number.isFinite(ratio) && ratio > 0);

                if (!hasValidRatios) {
                    rowElement.classList.remove("gallery-row--proportional");
                    rowElement.style.removeProperty("--gallery-columns");
                    return;
                }

                const columns = aspectRatios
                    .map((ratio) => `minmax(0, ${ratio}fr)`)
                    .join(" ");

                rowElement.classList.add("gallery-row--proportional");
                rowElement.style.setProperty("--gallery-columns", columns);
            };

            row.images.forEach((image) => {
                const figure = document.createElement("figure");
                figure.className = "gallery-item";
                const imageElement = createImage(image, false, updateProportionalColumns);
                imageElements.push(imageElement);
                figure.append(imageElement);
                rowElement.append(figure);
            });

            updateProportionalColumns();

            fragment.append(rowElement);
        });

        mount.replaceChildren(fragment);
    };

    const render = ({ featureMount, galleryMount, featuredImage, galleryRows }) => {
        if (!featureMount || !galleryMount || !featuredImage) return;

        featureMount.replaceChildren(createImage(featuredImage, true));
        renderRows(galleryMount, galleryRows);
    };

    globalThis.ProjectGallery = Object.freeze({
        normaliseRows,
        render
    });
})();
