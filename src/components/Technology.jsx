import React from "react";

function Technology({ img, title }) {
  return (
    <div className="language">
      <figure className="language__img--wrapper">
        <img className="language__img" src={img}></img>
      </figure>
      <span className="language__name">{title}</span>
    </div>
  );
}

export default Technology;
