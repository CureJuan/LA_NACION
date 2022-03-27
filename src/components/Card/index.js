import React from "react";
import "../../App.scss";

const Card = ({ category, title, image, author, text }) => {
  return (
    <>
      <div className="card">
        <div className="card-container">
          {image && (
            <div
              className="image"
              style={{ backgroundImage: `url(${image})` }}
            />
          )}
          <h3 className={`font-primary-bold`}>
            <span className="category">{category}</span>.&nbsp;
            {title}
          </h3>
          {text}
          {author && <p className={`font-secondary`}>Por {author}</p>}
        </div>
      </div>
    </>
  );
};

export default Card;
