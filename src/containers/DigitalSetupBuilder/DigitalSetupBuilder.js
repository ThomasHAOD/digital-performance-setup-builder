import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import DigitalSetup from "../../components/DigitalSetup/DigitalSetup";

class DigitalSetupBuilder extends Component {
  render() {
    return (
      <Aux>
        <DigitalSetup />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default DigitalSetupBuilder;
