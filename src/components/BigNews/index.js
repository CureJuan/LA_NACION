import React from "react";
import "../../App.scss";

const BigNews = ({ category, title, date, text }) => {
  return (
    <div className="news">
      <div>
        <h1 className={`font-primary-bold`}>
          <span className="category">{category}</span>.&nbsp;
          {title}
        </h1>
        {text}
        {date && <p className={`font-secondary`}>{date}</p>}
      </div>
    </div>
  );
};

export default BigNews;
