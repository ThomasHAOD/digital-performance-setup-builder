import React from "react";

import DigitalSetup from "../../DigitalSetup/DigitalSetup";
import Button from "../../UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

const checkoutSummary = props => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Happy Gigging</h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <DigitalSetup digitalGadgets={props.gadgets} />
      </div>
      <Button btnType="Danger" clicked>
        CANCEL
      </Button>
      <Button btnType="Success" clicked>
        CONTINUE
      </Button>
    </div>
  );
};

export default checkoutSummary;
