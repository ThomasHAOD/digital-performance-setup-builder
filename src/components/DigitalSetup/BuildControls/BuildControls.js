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
    {controls.map(ctrl => (
      <BuildControl key={ctrl.label} label={ctrl.label} />
    ))}
  </div>
);
export default buildControls;
