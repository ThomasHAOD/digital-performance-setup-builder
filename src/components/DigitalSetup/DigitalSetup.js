import React from "react";

import DigitalGadgets from "./DigitalGadgets/DigitalGadgets";
import classes from "./DigitalSetup.module.css";

const digitalSetup = props => {
  return (
    <div className={classes.DigitalSetup}>
      <DigitalGadgets type="mixer" />
      <DigitalGadgets type="right-hand-deck" />
      <DigitalGadgets type="left-hand-deck" />
      <DigitalGadgets type="keyboard" />
      <DigitalGadgets type="drum-machine" />
      <DigitalGadgets type="fx-module" />
    </div>
  );
};

export default digitalSetup;
