"use strict";

const petesheadProjectImages = {
    featuredImage: {
        src: "../assets/peteshead1.png",
        alt: "Pete°s Head whisky brand illustration",
        width: 2000,
        height: 2000
    },
    galleryRowsBeforeBrandWorld: [
        {
            images: [{
                src: "../assets/peteshead2.png",
                alt: "Pete°s Head whisky packaging illustration",
                width: 2000,
                height: 2000
            }]
        },
        {
            images: [{
                src: "../assets/peteshead3.png",
                alt: "Pete°s Head coastal whisky brand artwork",
                width: 2000,
                height: 2000
            }]
        },
        {
            images: [{
                src: "../assets/peteshead4.png",
                alt: "Pete°s Head whisky visual identity presentation",
                width: 2274,
                height: 1787
            }]
        },
        {
            images: [{
                src: "../assets/peteshead5.png",
                alt: "Pete°s Head whisky bottle and brand artwork",
                width: 2000,
                height: 2000
            }]
        }
    ],
    galleryRowsAfterBrandWorld: [
        {
            images: [{
                src: "../assets/peteshead6.png",
                alt: "Pete°s Head brand world campaign presentation",
                width: 3722,
                height: 1995
            }]
        },
        {
            images: [{
                src: "../assets/peteshead7.png",
                alt: "Pete°s Head outdoor advertising presentation",
                width: 3040,
                height: 1640
            }]
        },
        {
            images: [{
                src: "../assets/peteshead8a.png",
                alt: "Pete°s Head campaign portrait artwork",
                width: 808,
                height: 1080
            }, {
                src: "../assets/peteshead8b.png",
                alt: "Pete°s Head campaign portrait artwork companion",
                width: 808,
                height: 1080
            }]
        }
    ]
};

ProjectGallery.render({
    featureMount: document.querySelector("#project-feature"),
    galleryMount: document.querySelector("#project-gallery-before-brand"),
    featuredImage: petesheadProjectImages.featuredImage,
    galleryRows: petesheadProjectImages.galleryRowsBeforeBrandWorld
});

ProjectGallery.renderRows(
    document.querySelector("#project-gallery-after-brand"),
    petesheadProjectImages.galleryRowsAfterBrandWorld
);
