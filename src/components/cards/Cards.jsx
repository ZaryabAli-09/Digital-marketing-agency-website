import React, { useEffect, useState } from "react";
import "./card.css";
import img1 from "../../assets/card/img1.avif";
import img2 from "../../assets/card/img2.avif";
import img3 from "../../assets/card/img3.avif";
import img4 from "../../assets/card/img4.avif";
import img5 from "../../assets/card/img5.avif";
const Cards = () => {
  useEffect(() => {
    const panels = document.querySelectorAll(".panel");

    panels.forEach((panel) => {
      panel.addEventListener("click", () => {
        removeActiveClasses();
        panel.classList.add("active");
      });
    });

    const removeActiveClasses = () => {
      panels.forEach((panel) => {
        panel.classList.remove("active");
      });
    };
  }, []);

  return (
    <div className="container" id="team">
      <div className={`panel`} style={{ backgroundImage: `url(${img1})` }}>
        <h3>Hena Team Leader</h3>
      </div>
      <div className="panel" style={{ backgroundImage: `url(${img2})` }}>
        <h3>Alex SEO Expert</h3>
      </div>
      <div className="panel" style={{ backgroundImage: `url(${img3})` }}>
        <h3>Jona Ads-Configurator</h3>
      </div>
      <div className="panel" style={{ backgroundImage: `url(${img4})` }}>
        <h3>Alexa Product Desginer</h3>
      </div>
      <div className="panel" style={{ backgroundImage: `url(${img5})` }}>
        <h3>Marina Project Planner</h3>
      </div>
    </div>
  );
};

export default Cards;
