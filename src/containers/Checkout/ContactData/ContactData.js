import React, { Component } from "react";

import Button from "../../../components/UI/Button/Button";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postCode: ""
    }
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        <form>
          <input
            className={classes.Input}
            type="text"
            name="name"
            placeholder="Your Name"
          ></input>
          <input
            className={classes.Input}
            type="email"
            name="email"
            placeholder="Your Email"
          ></input>
          <input
            className={classes.Input}
            type="text"
            name="street"
            placeholder="Your street"
          ></input>
          <input
            className={classes.Input}
            type="text"
            name="postcode"
            placeholder="Your postcode"
          ></input>
          <Button btnType="Success">Order</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
