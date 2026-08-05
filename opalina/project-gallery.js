"use strict";

const opalinaProjectImages = {
    featuredImage: {
        src: "../assets/Opalina1.webp",
        alt: "Opalina aperitif bottle framed by two hands in a sunlit garden",
        width: 2475,
        height: 1500
    },
    galleryRows: [
        {
            images: [{
                src: "../assets/Opalina2.webp",
                alt: "Opalina aperitif bottles displayed against a dark green background",
                width: 4000,
                height: 3153
            }]
        },
        {
            images: [{
                src: "../assets/Opalina4a.webp",
                alt: "Close-up of the embossed Opalina bottle shoulder and cap",
                width: 1000,
                height: 1000
            }, {
                src: "../assets/Opalina4b.webp",
                alt: "Close-up of the Opalina label and illustrated hands",
                width: 1000,
                height: 1000
            }]
        },
        {
            images: [{
                src: "../assets/Opalina5.webp",
                alt: "Opalina bottles and pear leaves arranged on a pale green surface",
                width: 2000,
                height: 1365
            }]
        },
        {
            images: [{
                src: "../assets/Opalina6a.webp",
                alt: "Opalina presentation box with bottle and pear spritz",
                width: 1116,
                height: 1000
            }, {
                src: "../assets/Opalina6b.webp",
                alt: "Illuminated made-to-share Opalina advertising display",
                width: 715,
                height: 953
            }]
        },
        {
            images: [{
                src: "../assets/Opalina8.webp",
                alt: "Friends sharing Opalina spritzes at a sunlit outdoor table",
                width: 1500,
                height: 1006
            }]
        },
        {
            images: [{
                src: "../assets/Opalina9.webp",
                alt: "Opalina campaign graphics displayed across an outdoor wall",
                width: 2000,
                height: 1143
            }]
        },
        {
            images: [{
                src: "../assets/Opalina10a.webp",
                alt: "Made-to-share Opalina advertisement displayed on a building",
                width: 575,
                height: 1000
            }, {
                src: "../assets/Opalina10b.webp",
                alt: "Opalina campaign displayed on a delivery truck",
                width: 1287,
                height: 1000
            }]
        },
        {
            images: [{
                src: "../assets/Opalina11.webp",
                alt: "Large Opalina made-to-share billboard beneath a blue sky",
                width: 2000,
                height: 1195
            }]
        }
    ]
};

ProjectGallery.render({
    featureMount: document.querySelector("#project-feature"),
    galleryMount: document.querySelector("#project-gallery"),
    featuredImage: opalinaProjectImages.featuredImage,
    galleryRows: opalinaProjectImages.galleryRows
});
