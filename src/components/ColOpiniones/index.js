import React from "react";
import "../ColOpiniones/styles.scss";

const ColOpiniones = ({ category, title, date, author }) => {
  return (
    <>
      <div className="col_options">
        <div>
          <span className="category_options">{category}</span>
        </div>
        <div className="title">{title}</div>
        {author && <p className={`autor`}>Por {author}</p>}
        <br /> <br />
        <h6 className="date">
          <span>{date}</span>
        </h6>
        <hr />
      </div>
    </>
  );
};

export default ColOpiniones;
