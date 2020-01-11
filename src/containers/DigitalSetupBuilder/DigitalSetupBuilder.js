import React, { Component } from "react";

import Aux from "../../hoc/Aux/Aux";
import DigitalSetup from "../../components/DigitalSetup/DigitalSetup";
import BuildControls from "../../components/DigitalSetup/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/DigitalSetup/OrderSummary/OrderSummary";

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
    totalPrice: 800,
    purchasable: false,
    purchasing: false
  };

  updatePurchaseState(gadgets) {
    const sum = Object.keys(gadgets)
      .map(gtKey => {
        return gadgets[gtKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

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
    this.updatePurchaseState(updatedGadgets);
  };

  removeGadgetHandler = type => {
    const oldCount = this.state.digitalGadgets[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedGadgets = {
      ...this.state.digitalGadgets
    };
    updatedGadgets[type] = updatedCount;
    const priceDeduction = GADGETS_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, digitalGadgets: updatedGadgets });
    this.updatePurchaseState(updatedGadgets);
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler() {
    alert("You Continue");
  }

  render() {
    const disabledInfo = {
      ...this.state.digitalGadgets
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          <OrderSummary
            price={this.state.totalPrice}
            gadgets={this.state.digitalGadgets}
            purchaseCancelled={this.purchaseCancelHandler}
            purchaseContinued={this.purchaseContinueHandler}
          />
        </Modal>
        <DigitalSetup digitalGadgets={this.state.digitalGadgets} />
        <BuildControls
          gadgetAdded={this.addGadgetHandler}
          gadgetRemoved={this.removeGadgetHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          purchased={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default DigitalSetupBuilder;
