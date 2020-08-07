import React from "react";
import './card.styles.css'

export const Card = (props) => {
  return (
    <div className="card-container">
        <img alt="cats" src={`https://robohash.org/${props.cat.id}?set=set4`} width="280px" />
      <h3> {props.cat.name}</h3>
      <h6> {props.cat.email}</h6>
    </div>
  );
};
