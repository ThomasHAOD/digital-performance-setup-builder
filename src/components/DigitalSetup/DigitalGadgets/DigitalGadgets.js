import React from "react";
import classes from "./BurgerIngredients.module.css";

const digitalGadgets = props => {
  let gadget = null;

  switch (props.type) {
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
};

export default digitalGadgets;
