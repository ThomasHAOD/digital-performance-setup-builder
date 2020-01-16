import React, { Component } from "react";
import axios from "../../axios-order";

import Spinner from "../../components/UI/Spinner/Spinner";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class Orders extends Component {
  state = {
    orders: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get("/orders.json")
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({ ...res.data[key], id: key });
        }
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch(err => {
        this.setState({ loading: false });
      });
  }
  render() {
    let orderList = this.state.orders.map(order => (
      <Order key={order.id} gadgets={order.gadgets} price={order.price} />
    ));

    if (this.state.loading) {
      orderList = <Spinner />;
    }
    return <div>{orderList}</div>;
  }
}

export default withErrorHandler(Orders, axios);
