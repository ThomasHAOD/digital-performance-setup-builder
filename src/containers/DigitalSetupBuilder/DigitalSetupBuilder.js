import React, { Component } from "react";
import axios from "../../axios-order";
import { connect } from "react-redux";

import Aux from "../../hoc/Aux/Aux";
import DigitalSetup from "../../components/DigitalSetup/DigitalSetup";
import BuildControls from "../../components/DigitalSetup/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/DigitalSetup/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as digitalSetupBuilderActions from "../../store/actions/index";

class DigitalSetupBuilder extends Component {
  state = {
    purchasing: false,
    loading: false,
    error: false
  };

  componentDidMount() {
    // axios
    //   .get("gadgets.json")
    //   .then(res => {
    //     this.setState({ digitalGadgets: res.data });
    //     console.log(this.state.digitalGadgets);
    //   })
    //   .catch(err => {
    //     this.props.error(err);
    //     this.setState({ error: true });
    //   });
  }

  updatePurchaseState(gadgets) {
    const sum = Object.keys(gadgets)
      .map(gtKey => {
        return gadgets[gtKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  }

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    this.props.history.push({
      pathname: "/checkout"
    });
  };

  render() {
    const disabledInfo = {
      ...this.props.gads
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let setup = this.state.error ? <p>Setup cant be Loaded</p> : <Spinner />;

    if (this.props.gads) {
      setup = (
        <Aux>
          <DigitalSetup digitalGadgets={this.props.gads} />
          <BuildControls
            gadgetAdded={this.props.onGadgetAdded}
            gadgetRemoved={this.props.onGadgetRemoved}
            disabled={disabledInfo}
            price={this.props.price}
            purchasable={this.updatePurchaseState(this.props.gads)}
            purchased={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          price={this.props.price}
          gadgets={this.props.gads}
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

const mapStateToProps = state => {
  return {
    gads: state.digitalGadgets,
    price: state.totalPrice
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGadgetAdded: gadgetName =>
      dispatch(digitalSetupBuilderActions.addGadget(gadgetName)),
    onGadgetRemoved: gadgetName =>
      dispatch(digitalSetupBuilderActions.removeGadget(gadgetName))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(DigitalSetupBuilder, axios));
