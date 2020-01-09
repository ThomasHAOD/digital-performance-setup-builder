import React from "react";

import DigitalGadgets from "./DigitalGadgets/DigitalGadgets";
import classes from "./DigitalSetup.module.css";

const digitalSetup = props => {
  const digitalGadgets = Object.keys(props.digitalGadgets).map(dgKey => {
    return [...Array(props.digitalGadgets[dgKey])].map((_, i) => {
      return <DigitalGadgets key={dgKey + i} type={dgKey} />;
    });
  });
  return <div className={classes.DigitalSetup}>{digitalGadgets}</div>;
};

export default digitalSetup;
