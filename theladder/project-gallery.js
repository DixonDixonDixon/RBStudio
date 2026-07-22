"use strict";

const theLadderProjectImages = {
    featuredImage: {
        src: "../assets/theladder1.png",
        alt: "The Ladder wine brand campaign feature image",
        width: 1927,
        height: 1075
    },
    galleryRows: [
        {
            images: [{
                src: "../assets/theladder2a.png",
                alt: "The Ladder wine bottle and packaging presentation",
                width: 2000,
                height: 2000
            }, {
                src: "../assets/theladder2b.png",
                alt: "The Ladder wine label and identity presentation",
                width: 2000,
                height: 2000
            }]
        },
        {
            images: [{
                src: "../assets/theladder3.png",
                alt: "The Ladder wine brand visual identity",
                width: 4403,
                height: 2424
            }]
        },
        {
            images: [{
                src: "../assets/theladder3a.png",
                alt: "Close-up of The Ladder Cabernet Franc wine label",
                width: 2000,
                height: 1500
            }, {
                src: "../assets/theladder3b.png",
                alt: "The Ladder Roussanne wine bottle",
                width: 1000,
                height: 2000
            }]
        },
        {
            images: [{
                src: "../assets/theladder4.png",
                alt: "The Ladder wine campaign artwork",
                width: 2593,
                height: 1640
            }]
        },
        {
            images: [{
                src: "../assets/theladder5a.png",
                alt: "The Ladder wine campaign detail",
                width: 1106,
                height: 1000
            }, {
                src: "../assets/theladder5b.png",
                alt: "The Ladder wine campaign companion detail",
                width: 977,
                height: 1000
            }]
        },
        {
            images: [{
                src: "../assets/theladder6.png",
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
