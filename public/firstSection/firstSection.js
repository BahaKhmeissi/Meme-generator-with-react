import React from "react";
import grid from "../images/grid.jpg";



export default function Hero(){


    return (
      <section>
        <img src={grid} alt="" className="gridPic" />
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </section>
    );
}