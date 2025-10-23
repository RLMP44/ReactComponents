import React from "react";

function Heading() {
    const currentTime = new Date().getHours();
    let greeting;
    let style = {
      color: "",
    };

    if (currentTime < 12) {
    greeting = "Good Morning";
    style.color = "red";
    } else if (currentTime >= 12 && currentTime < 18) {
    greeting = "Good Afternoon";
    style.color = "green";
    } else {
    greeting = "Good Night";
    style.color = "blue";
    }
    return <h1 className="heading" style={style}>
      {greeting}
    </h1>
}

export default Heading;