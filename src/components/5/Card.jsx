import React from "react";

function Card(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <img
        src="https://www.youngminds.org.uk/media/3bljel4m/young-person-smiling-with-their-friends.png?quality=55"
        alt="avatar-image"
      ></img>
      <p>+ 1 656 908 3829</p>
      <p>123@gmail.com</p>
    </div>
  );
}

export default Card;
