import React, { Component } from "react";
import axios from "../../axios-order";

import Aux from "../../hoc/Aux/Aux";
import DigitalSetup from "../../components/DigitalSetup/DigitalSetup";
import BuildControls from "../../components/DigitalSetup/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/DigitalSetup/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const GADGETS_PRICES = {
  deck: 200,
  mixer: 400,
  synth: 450,
  fxModule: 250,
  drumMachine: 550
};

class DigitalSetupBuilder extends Component {
  state = {
    digitalGadgets: null,
    totalPrice: 0,
    purchasable: false,
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    axios
      .get("gadgets.json")
      .then(res => {
        this.setState({ digitalGadgets: res.data });
        console.log(this.state.digitalGadgets);
      })
      .catch(err => {
        this.props.error(err);
        this.setState({ error: true });
      });
  }

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

  purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in this.state.digitalGadgets) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.digitalGadgets[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.digitalGadgets
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let setup = this.state.error ? <p>Setup cant be Loaded</p> : <Spinner />;

    if (this.state.digitalGadgets) {
      setup = (
        <Aux>
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
      orderSummary = (
        <OrderSummary
          price={this.state.totalPrice}
          gadgets={this.state.digitalGadgets}
          purchaseCancelled={this.purchaseCancelHandler}
          purchaseContinued={this.purchaseContinueHandler}
        />
      );
    }

    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {setup}
      </Aux>
    );
  }
}

export default withErrorHandler(DigitalSetupBuilder, axios);
