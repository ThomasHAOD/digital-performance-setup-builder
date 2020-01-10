import React from "react";

import Aux from "../../../hoc/Aux";

const orderSummary = props => {
  const gadgetSummary = Object.keys(props.gadgets).map(key => {
    return (
      <li key={key}>
        <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
        {props.gadgets[key]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A bangin setup to wow crowds with the following equipment</p>
      <ul>{gadgetSummary}</ul>
      <p>Continue to Checkout?</p>
    </Aux>
  );
};

export default orderSummary;
