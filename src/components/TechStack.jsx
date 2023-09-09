import React from "react";
import Technology from "./Technology";
import clogo from "../assets/c.png";

function TechStack({ img, title }) {
  return (
    <section id="techstack">
      <div className="container">
        <div className="row">
          <h1 className="section__title">
            This is my <span className="blue">technology</span> stack
          </h1>
          <div className="language__list">
            <Technology
              img={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/240px-HTML5_Badge.svg.png"
              }
              title={"HTML"}
            />
            <Technology
              img={
                "https://cdn.iconscout.com/icon/free/png-256/css-131-722685.png"
              }
              title={"CSS"}
            />
            <Technology
              img={
                "https://cdn.iconscout.com/icon/free/png-256/javascript-1-225993.png"
              }
              title={"JavaScript"}
            />
            <Technology
              img={
                "https://cdn.iconscout.com/icon/free/png-256/react-3-1175109.png"
              }
              title={"React"}
            />
            <Technology
              img={"https://img.icons8.com/color/256/firebase.png"}
              title={"Firebase"}
            />
            <Technology img={clogo} title={"C++"} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default TechStack;
