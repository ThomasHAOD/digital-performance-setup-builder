import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import DigitalSetup from "../../components/DigitalSetup/DigitalSetup";
import BuildControls from "../../components/DigitalSetup/BuildControls/BuildControls";

const GADGETS_PRICES = {
  deck: 200,
  mixer: 400,
  synth: 450,
  fxModule: 250,
  drumMachine: 550
};

class DigitalSetupBuilder extends Component {
  state = {
    digitalGadgets: {
      deck: 0,
      mixer: 0,
      synth: 0,
      fxModule: 0,
      drumMachine: 0
    },
    totalPrice: 800
  };

  addGadgetHandler = type => {
    const oldCount = this.state.digitalGadgets[type];
    const updatedCount = oldCount + 1;
    const updatedGadgets = {
      ...this.state.digitalGadgets
    };
    updatedGadgets[type] = updatedCount;
    const priceAddition = GADGETS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, digitalGadgets: updatedGadgets });
  };

  removeGadgetHandler = type => {};
  render() {
    return (
      <Aux>
        <DigitalSetup digitalGadgets={this.state.digitalGadgets} />
        <BuildControls gadgetAdded={this.addGadgetHandler} />
      </Aux>
    );
  }
}

export default DigitalSetupBuilder;
