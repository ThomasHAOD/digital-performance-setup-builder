import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    gadgets: {}
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const gadgets = {};
    for (let param of query.entries()) {
      gadgets[param[0]] = +param[1];
    }
    this.setState({ gadgets: gadgets });
  }

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          gadgets={this.state.gadgets}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
      </div>
    );
  }
}

export default Checkout;
