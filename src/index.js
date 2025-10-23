import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));
const html = (
  <div>
    <h1>Favorite Foods</h1>
    <ul>
      <li>Sushi</li>
      <li>Katsudon</li>
      <li>Namasu</li>
    </ul>
  </div>
);

root.render(html);
