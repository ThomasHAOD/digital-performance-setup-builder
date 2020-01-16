import React from "react";
import classes from "./Order.module.css";
import DigitalGadgets from "../../components/DigitalSetup/DigitalGadgets/DigitalGadgets";

const order = props => {
  console.log(props);
  let gadgets = Object.keys(props.gadgets)
    .map(dgKey => {
      return [...Array(props.gadgets[dgKey])].map((_, i) => {
        return <DigitalGadgets key={dgKey + i} type={dgKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  return (
    <div className={classes.Order}>
      <p>Gadgets: {gadgets}</p>
      <p>Price: £{props.price}</p>
    </div>
  );
};

export default order;
