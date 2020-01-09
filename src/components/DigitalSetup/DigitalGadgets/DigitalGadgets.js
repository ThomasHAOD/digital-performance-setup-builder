import React, { Compornent } from "react";
import PropTypes from "prop-types";

import classes from "./BurgerIngredients.module.css";

class DigitalGadgets extends Compornent {
  render() {
    let gadget = null;

    switch (this.props.type) {
      case "mixer":
        gadget = (
          <div className={classes.BreadTop}>
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
        gadget = <div classname={classes.Cheese}></div>;
        break;
      default:
        gadget = null;
    }
    return ingredient;
  }
}

DigitalGadgets.propTypes = {
  type: PropTypes.string.isRequired
};

export default DigitalGadgets;
