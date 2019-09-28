import React from "react";
import "./window.styles.css";

export default ({ images, currentImageIndex, size, radius }) => {
  return (
    <div className="window">
      {images.map((img, i) => {
        return (
          <div
            className="image"
            key={img.id}
            style={{
                height: size,
                borderRadius: radius,
                width: size,
                backgroundImage: `url(${img.imgUrl})`,
              opacity: 1 - i * 0.2 + currentImageIndex * 0.2,
              transform: `translate(${-(size+10)*currentImageIndex}px, -50%)`
            }}
          >
          </div>
        );
      })}
    </div>
  );
};
