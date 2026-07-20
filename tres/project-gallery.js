"use strict";

const tresProjectImages = {
    featuredImage: {
        src: "../assets/Tres1.png",
        alt: "Model reclining beside a bottle of Tres Finnish dry gin",
        width: 4736,
        height: 3450
    },
    galleryRows: [
        {
            images: [
                {
                    src: "../assets/Tres2.png",
                    alt: "Three Tres gin bottles arranged with colourful geometric forms",
                    width: 2000,
                    height: 1500
                }
            ]
        },
        {
            images: [
                {
                    src: "../assets/Tres3.png",
                    alt: "Tres gin bottle and tonic can packaging presentation",
                    width: 2000,
                    height: 1680
                }
            ]
        },
        {
            images: [
                {
                    src: "../assets/Tres4.png",
                    alt: "Three Tres tonic cans beside translucent red and green forms",
                    width: 2000,
                    height: 1500
                }
            ]
        },
        {
            layout: "twoWideLeft",
            images: [
                {
                    src: "../assets/Tres5.png",
                    alt: "Close-up of the Tres Finnish dry gin bottle label",
                    width: 1000,
                    height: 1000
                },
                {
                    src: "../assets/Tres6.png",
                    alt: "Close-up of the textured cap on a Tres gin bottle",
                    width: 1552,
                    height: 2000
                }
            ]
        },
        {
            layout: "twoWideRight",
            images: [
                {
                    src: "../assets/Tres7.png",
                    alt: "Hand holding a bottle of Tres Finnish dry gin",
                    width: 1722,
                    height: 2048
                },
                {
                    src: "../assets/Tres8.png",
                    alt: "Model holding a Tres tonic can against a white backdrop",
                    width: 1000,
                    height: 924
                }
            ]
        },
        {
            layout: "twoWideLeft",
            images: [
                {
                    src: "../assets/Tres9.png",
                    alt: "Tres tonic billboard displayed on a building",
                    width: 1610,
                    height: 1290
                },
                {
                    src: "../assets/Tres10.png",
                    alt: "Tres Finnish dry gin advertisement at a city bus shelter",
                    width: 1776,
                    height: 1328
                }
            ]
        },
        {
            images: [
                {
                    src: "../assets/Tres11.png",
                    alt: "Three illuminated outdoor posters showing details of the Tres packaging",
                    width: 3303,
                    height: 1804
                }
            ]
        }
    ]
};

ProjectGallery.render({
    featureMount: document.querySelector("#project-feature"),
    galleryMount: document.querySelector("#project-gallery"),
    featuredImage: tresProjectImages.featuredImage,
    galleryRows: tresProjectImages.galleryRows
});
