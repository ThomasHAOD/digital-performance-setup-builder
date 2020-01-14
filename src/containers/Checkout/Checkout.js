import React, { Component } from "react";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component {
  state = {
    gadgets: {
      mixer: 1,
      deck: 1,
      synth: 1
    }
  };

  render() {
    return (
      <div>
        <CheckoutSummary gadgets={this.state.gadgets} />
      </div>
    );
  }
}

export default Checkout;
