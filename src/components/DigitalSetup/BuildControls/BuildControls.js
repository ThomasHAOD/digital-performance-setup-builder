import React from "react";

import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Mixer", type: "mixer" },
  { label: "Deck", type: "deck" },
  { label: "Synth", type: "synth" },
  { label: "Drum Machine", type: "drumMachine" },
  { label: "FX Module", type: "fxModule" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current Price: <strong>£{props.price}</strong>
    </p>
    {controls.map(ctrl => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.gadgetAdded(ctrl.type)}
        removed={() => props.gadgetRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <button className={classes.OrderButton} disabled={!props.purchasable}>
      ORDER NOW!
    </button>
  </div>
);
export default buildControls;
