import React from "react"

export default function Card(props) {
  console.log(props);
  
    return (
      <div className="card">
        <img src="src\images\swimmer.jpeg" className="" />
        
        <div className="card--stats">
          <img src="" className="card--star" />
          <span>{props.rating}</span>
          <span className="gray">{props.review} </span>
          <span className="gray">{props.country}</span>
        </div>
        <p> {props.title} </p>
        <p>
          <span className="bold"> {props.price} </span> / person
        </p>
      </div>
    );
}

