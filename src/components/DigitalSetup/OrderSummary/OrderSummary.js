import React, { Component } from "react";

import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
  componentDidUpdate() {
    console.log("[OrderSummary] did update");
  }
  render() {
    const gadgetSummary = Object.keys(this.props.gadgets).map(key => {
      return (
        <li key={key}>
          <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
          {this.props.gadgets[key]}
        </li>
      );
    });

    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A bangin setup to wow crowds with the following equipment</p>
        <ul>{gadgetSummary}</ul>
        <p>
          <strong>Total Price: £{this.props.price}</strong>
        </p>
        <p>Continue to Checkout?</p>
        <Button clicked={this.props.purchaseCancelled} btnType="Danger">
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinued} btnType="Success">
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
