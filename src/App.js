import React from "react";
import { Route, Switch } from "react-router-dom";

import Layout from "./hoc/Layout/Layout";
import DigitalSetupBuilder from "./containers/DigitalSetupBuilder/DigitalSetupBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout} />
        <Route exact path="/" component={DigitalSetupBuilder} />
        <Route exact path="/orders" component={Orders} />
      </Switch>
    </Layout>
  );
}

export default App;
