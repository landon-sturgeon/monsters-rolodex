import React from "react";
import "./Card.styles.css";

export const Car = (props) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}
    />
    <h2> {props.monster.name} </h2>
    <p>{props.monster.email}</p>
  </div>
);
