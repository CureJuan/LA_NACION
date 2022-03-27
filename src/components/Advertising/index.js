import React from "react";
import "../../App.scss";

const Advertising = ({ category, title, image, author }) => {
  return (
    <div className="adv red">
      {image && (
        <div className="image" style={{ backgroundImage: `url(${image})` }} />
      )}
      <div className="space">
        <p>
          <span>{category}</span>.&nbsp;
          {title}
        </p>
        {author && <p className={`font-secondary`}>Por {author}</p>}
      </div>
    </div>
  );
};

export default Advertising;
