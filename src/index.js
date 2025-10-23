import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));

// react names are in pascal case (first letter capitalized)
function Heading() {
  return <h1>Favorite Foods</h1>
}

// if there are no children elements, best practice is to have self-closing tags
// i.e. <Heading></Heading> becomes the below
const html = (
  <div>
    <Heading /> 
    <ul>
      <li>Sushi</li>
      <li>Katsudon</li>
      <li>Namasu</li>
    </ul>
  </div>
);

root.render(html);
