import React, { Component } from "react";
import axios from "../../../axios-order";

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import classes from "./ContactData.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postCode: ""
    },
    loading: false
  };

  orderHandler = event => {
    event.preventDefault();
    this.setState({ loading: true });

    const order = {
      gadgets: this.props.gadgets,
      price: this.props.price,
      customer: {
        name: "Tam O'Donnell",
        address: {
          street: "test street",
          postCode: "10"
        },
        email: "test@test.com"
      },
      deliveryMethod: "fastest"
    };
    axios
      .post("/orders.json", order)
      .then(res => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  };

  render() {
    let form = (
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
        <Button btnType="Success" clicked={this.orderHandler}>
          Order
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
