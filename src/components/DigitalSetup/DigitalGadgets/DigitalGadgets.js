import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./DigitalGadgets.module.css";

class DigitalGadgets extends Component {
  render() {
    let gadget = null;

    switch (this.props.type) {
      case "mixer":
        gadget = (
          <div className={classes.Mixer}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case "right-hand-deck":
        gadget = <div className={classes.BreadBottom}></div>;
        break;
      case "left-hand-deck":
        gadget = <div className={classes.Meat}></div>;
        break;
      case "drum-machine":
        gadget = <div className={classes.Salad}></div>;
        break;
      case "keyboard":
        gadget = <div className={classes.Bacon}></div>;
        break;
      case "fx-module":
        gadget = <div className={classes.Cheese}></div>;
        break;
      default:
        gadget = null;
    }
    return gadget;
  }
}

DigitalGadgets.propTypes = {
  type: PropTypes.string.isRequired
};

export default DigitalGadgets;
