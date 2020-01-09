import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import DigitalSetup from "../../components/DigitalSetup/DigitalSetup";
import BuildControls from "../../components/DigitalSetup/BuildControls/BuildControls";

class DigitalSetupBuilder extends Component {
  state = {
    digitalGadgets: {
      deck: 0,
      mixer: 0,
      synth: 0,
      fxModule: 0,
      drumMachine: 0
    }
  };
  render() {
    return (
      <Aux>
        <DigitalSetup digitalGadgets={this.state.digitalGadgets} />
        <div>Build Controls</div>
        <BuildControls />
      </Aux>
    );
  }
}

export default DigitalSetupBuilder;
