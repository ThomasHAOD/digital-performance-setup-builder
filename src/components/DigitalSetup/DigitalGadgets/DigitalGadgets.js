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
            <div className={classes.Knobs1}></div>
            <div className={classes.Knobs2}></div>
            <div className={classes.Knobs3}></div>
            <div className={classes.Knobs4}></div>
            <div className={classes.Fader1}></div>
            <div className={classes.Fader2}></div>
            <div className={classes.Fader3}></div>
            <div className={classes.Fader4}></div>
            <div className={classes.CrossFader}></div>
          </div>
        );
        break;
      case "deck":
        gadget = (
          <div className={classes.Deck}>
            <div className={classes.TurnTable}></div>
            <div className={classes.Needle}></div>
          </div>
        );
        break;

      case "drum-machine":
        gadget = <div className={classes.Salad}></div>;
        break;
      case "synth":
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
