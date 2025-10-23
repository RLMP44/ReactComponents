import React from "react";
import * as math from "../../calculator";

function List() {
  return (
    <ul>
      <li>{math.add(1, 2)}</li>
      <li>{math.multiply(2, 3)}</li>
      <li>{math.subtract(7, 2)}</li>
      <li>{math.divide(5, 2)}</li>
    </ul>
  );
}

export default List;
