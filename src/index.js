import React from "react";
import ReactDom from "react-dom/client";
import App from "./components/App";

const root = ReactDom.createRoot(document.getElementById("root"));

// if there are no children elements, best practice is to have self-closing tags
// i.e. <Heading></Heading> becomes the below
root.render(<App />);
