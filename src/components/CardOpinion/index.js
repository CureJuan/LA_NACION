import React from "react";
import "../../App.scss";

const CardOpinion = ({ title, image, author, text }) => {
  return (
    <>
      <div className="cardOpinion">
        <div className="card-container">
          <h3 className={`font-primary-bold`}>
            <span className="categoryOptions"></span>
            {title}
          </h3>
          <div className="autor">
            {image && (
              <div
                className="imageOpinion"
                style={{ backgroundImage: `url(${image}` }}
              />
            )}
            {author && <p className={`font-secondary-opinion`}>Por {author}</p>}
          </div>
          {text}
        </div>
      </div>
    </>
  );
};

export default CardOpinion;
