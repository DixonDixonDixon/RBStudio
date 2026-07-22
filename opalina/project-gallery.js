"use strict";

const opalinaProjectImages = {
    featuredImage: {
        src: "../assets/Opalina1.png",
        alt: "Opalina aperitif bottle framed by two hands in a sunlit garden",
        width: 2000,
        height: 1249
    },
    galleryRows: [
        {
            images: [{
                src: "../assets/Opalina2.png",
                alt: "Opalina aperitif bottles displayed against a dark green background",
                width: 2000,
                height: 1360
            }]
        },
        {
            images: [{
                src: "../assets/Opalina3a.png",
                alt: "Single Opalina bottle displayed against a dark green background",
                width: 1000,
                height: 1385
            }, {
                src: "../assets/Opalina3b.png",
                alt: "Angled Opalina bottle displayed against a dark green background",
                width: 1628,
                height: 1318
            }]
        },
        {
            images: [{
                src: "../assets/Opalina4a.png",
                alt: "Close-up of the embossed Opalina bottle shoulder and cap",
                width: 1000,
                height: 1000
            }, {
                src: "../assets/Opalina4b.png",
                alt: "Close-up of the Opalina label and illustrated hands",
                width: 1000,
                height: 1000
            }]
        },
        {
            images: [{
                src: "../assets/Opalina5.png",
                alt: "Opalina bottles and pear leaves arranged on a pale green surface",
                width: 2000,
                height: 1365
            }]
        },
        {
            images: [{
                src: "../assets/Opalina6a.png",
                alt: "Opalina presentation box with bottle and pear spritz",
                width: 1116,
                height: 1000
            }, {
                src: "../assets/Opalina6b.png",
                alt: "Illuminated made-to-share Opalina advertising display",
                width: 715,
                height: 953
            }]
        },
        {
            images: [{
                src: "../assets/Opalina8.png",
                alt: "Friends sharing Opalina spritzes at a sunlit outdoor table",
                width: 2000,
                height: 1341
            }]
        },
        {
            images: [{
                src: "../assets/Opalina9.png",
                alt: "Opalina campaign graphics displayed across an outdoor wall",
                width: 2000,
                height: 1143
            }]
        },
        {
            images: [{
                src: "../assets/Opalina10a.png",
                alt: "Made-to-share Opalina advertisement displayed on a building",
                width: 575,
                height: 1000
            }, {
                src: "../assets/Opalina10b.png",
                alt: "Opalina campaign displayed on a delivery truck",
                width: 1287,
                height: 1000
            }]
        },
        {
            images: [{
                src: "../assets/Opalina11.png",
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
