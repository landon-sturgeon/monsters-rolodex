import React from "react";
import "./Card.styles.css";

const Card = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set1`}
      height="180px"
      width="180px"
    />
    <h2> {props.monster.name} </h2>
    <p>{props.monster.email}</p>
  </div>
);

export default Card;
