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
        gadget = (
          <div className={classes.DrumMachine}>
            <div className={classes.Screen}></div>
            <div className={classes.DrumPad1}></div>
            <div className={classes.DrumPad2}></div>
            <div className={classes.DrumPad3}></div>
            <div className={classes.DrumPad4}></div>
            <div className={classes.DrumPad5}></div>
            <div className={classes.DrumPad6}></div>
            <div className={classes.DrumPad7}></div>
            <div className={classes.DrumPad8}></div>
            <div className={classes.DrumPad9}></div>
            <div className={classes.DrumPad10}></div>
            <div className={classes.DrumPad11}></div>
            <div className={classes.DrumPad12}></div>
            <div className={classes.DrumPad13}></div>
            <div className={classes.DrumPad14}></div>
            <div className={classes.DrumPad15}></div>
            <div className={classes.DrumPad16}></div>
          </div>
        );
        break;
      case "synth":
        gadget = (
          <div className={classes.Synth}>
            <div className={classes.WhiteKey}></div>
            <div className={classes.BlackKey}></div>
            <div className={classes.WhiteKey2}></div>
            <div className={classes.BlackKey2}></div>
            <div className={classes.WhiteKey3}></div>
            <div className={classes.BlackKey3}></div>
            <div className={classes.WhiteKey4}></div>
            <div className={classes.BlackKey4}></div>
            <div className={classes.WhiteKey5}></div>
            <div className={classes.BlackKey5}></div>
            <div className={classes.WhiteKey6}></div>
            <div className={classes.BlackKey6}></div>
            <div className={classes.WhiteKey7}></div>
            <div className={classes.Screen}></div>
            <div className={classes.DrumPad1}></div>
            <div className={classes.DrumPad2}></div>
            <div className={classes.DrumPad3}></div>
            <div className={classes.DrumPad4}></div>
          </div>
        );
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
