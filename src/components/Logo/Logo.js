import React from "react";

import dnbsLogo from "../../assets/images/dnbs-logo.png";
import classes from "./Logo.module.css";

const logo = props => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={dnbsLogo} alt="DNBS" />
  </div>
);

export default logo;
