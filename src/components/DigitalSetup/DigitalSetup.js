import React from "react";

import DigitalGadgets from "./DigitalGadgets/DigitalGadgets";
import classes from "./DigitalSetup.module.css";

const digitalSetup = props => {
  return (
    <div className={classes.DigitalSetup}>
      <DigitalGadgets type="mixer" />
      <DigitalGadgets type="deck" />
      <DigitalGadgets type="deck" />
      <DigitalGadgets type="synth" />
      <DigitalGadgets type="drum-machine" />
      <DigitalGadgets type="fx-module" />
    </div>
  );
};

export default digitalSetup;
