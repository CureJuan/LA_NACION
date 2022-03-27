import React from "react";
import "../../App.scss";

const BigCard = ({ image }) => {
  return (
    <div className="image-xl" style={{ backgroundImage: `url(${image})` }} />
  );
};

export default BigCard;
