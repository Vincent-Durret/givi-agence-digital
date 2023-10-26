import React, { useState } from "react";
import ImageGrid from "../UI/Button/ImageGrid/ImageGrid";

const PortofolioSectionOne = () => {
  const imageGroups = [
    [
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
        alt: "Description 1",
      },
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
        alt: "Description 2",
      },
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
        alt: "Description 3",
      },
    ],

    [
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
        alt: "Description 4",
      },
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
        alt: "Description 5",
      },
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
        alt: "Description 6",
      },
    ],
    [
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
        alt: "Description 7",
      },
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
        alt: "Description 8",
      },
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
        alt: "Description 9",
      },
    ],
    [
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
        alt: "Description 10",
      },
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
        alt: "Description 11",
      },
      {
        url: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
        alt: "Description 12",
      },
    ],
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {imageGroups.map((images, index) => (
        <ImageGrid key={index} images={images} />
      ))}
    </div>
  );
};

export default PortofolioSectionOne;
