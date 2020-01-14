import React from "react";
import Layout from "./hoc/Layout/Layout";
import DigitalSetupBuilder from "./containers/DigitalSetupBuilder/DigitalSetupBuilder";
import Checkout from "./containers/Checkout/Checkout";

function App() {
  return (
    <Layout>
      <DigitalSetupBuilder />
      <Checkout />
    </Layout>
  );
}

export default App;
