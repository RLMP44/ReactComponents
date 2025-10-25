import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2>{props.id}</h2>
        <h2 className="name">{props.name}</h2>
        <Avatar imgURL={props.imgURL} />
      </div>
      <div className="bottom">
        <Detail info={props.tel} />
        <Detail info={props.email} />
      </div>
    </div>
  );
}

export default Card;
