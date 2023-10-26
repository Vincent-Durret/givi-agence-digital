import React from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid gap-4">
      {images.map((image, index) => (
        <div key={index}>
          <img
            className="h-auto max-w-full rounded-lg hover:shadow-xl transition-all"
            src={image.url}
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
