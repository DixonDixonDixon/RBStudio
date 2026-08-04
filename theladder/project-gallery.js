"use strict";

const theLadderProjectImages = {
    featuredImage: {
        src: "../assets/theladder1.webp",
        alt: "The Ladder wine brand campaign feature image",
        width: 1927,
        height: 1075
    },
    galleryRows: [
        {
            images: [{
                src: "../assets/theladder2a.webp",
                alt: "The Ladder wine bottle and packaging presentation",
                width: 2000,
                height: 2000
            }, {
                src: "../assets/theladder2b.webp",
                alt: "The Ladder wine label and identity presentation",
                width: 2000,
                height: 2000
            }]
        },
        {
            images: [{
                src: "../assets/theladder3.webp",
                alt: "The Ladder wine brand visual identity",
                width: 4403,
                height: 2424
            }]
        },
        {
            images: [{
                src: "../assets/theladder3a.webp",
                alt: "Close-up of The Ladder Cabernet Franc wine label",
                width: 2000,
                height: 1500
            }, {
                src: "../assets/theladder3b.webp",
                alt: "The Ladder Roussanne wine bottle",
                width: 1000,
                height: 2000
            }]
        },
        {
            images: [{
                src: "../assets/theladder4.webp",
                alt: "The Ladder wine campaign artwork",
                width: 2593,
                height: 1640
            }]
        },
        {
            images: [{
                src: "../assets/theladder5a.webp",
                alt: "The Ladder wine campaign detail",
                width: 1106,
                height: 1000
            }, {
                src: "../assets/theladder5b.webp",
                alt: "The Ladder wine campaign companion detail",
                width: 977,
                height: 1000
            }]
        },
        {
            images: [{
                src: "../assets/theladder6.webp",
                alt: "The Ladder wine brand campaign",
                width: 1860,
                height: 1265
            }]
        }
    ]
};

ProjectGallery.render({
    featureMount: document.querySelector("#project-feature"),
    galleryMount: document.querySelector("#project-gallery"),
    featuredImage: theLadderProjectImages.featuredImage,
    galleryRows: theLadderProjectImages.galleryRows
});
