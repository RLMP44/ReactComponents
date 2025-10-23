// every individual component needs to import react
import React from "react";

// react names are in pascal case (first letter capitalized)
function Heading() {
  return <h1>Favorite Foods</h1>
};

// export as a component, don't use () bc it will run it right away
export default Heading;