import React from "react";

import DigitalGadgets from "./DigitalGadgets/DigitalGadgets";
import classes from "./DigitalSetup.module.css";

const digitalSetup = props => {
  let digitalGadgets = Object.keys(props.digitalGadgets)
    .map(dgKey => {
      return [...Array(props.digitalGadgets[dgKey])].map((_, i) => {
        return <DigitalGadgets key={dgKey + i} type={dgKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  console.log(digitalGadgets);
  if (digitalGadgets.length === 0) {
    digitalGadgets = <p>Please Start Adding Equipment</p>;
  }
  return <div className={classes.DigitalSetup}>{digitalGadgets}</div>;
};

export default digitalSetup;
