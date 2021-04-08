import React from "react";

function Card(props) {
  return (
    <div className="Cards">
      <div className="Card">
        <a href={props.link}>
          <img className="card-image" src={props.imgsrc} alt="card" />
          <div className="Title">
            <h3>{props.title}</h3>
          </div>
        </a>

        <link rel="stylesheet" href="" />
      </div>
    </div>
  );
}

export default Card;
