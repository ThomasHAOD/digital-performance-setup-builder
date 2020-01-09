import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import DigitalSetup from "../../components/DigitalSetup/DigitalSetup";

class DigitalSetupBuilder extends Component {
  state = {
    digitalGadgets: {
      deck: 2,
      mixer: 1,
      synth: 1,
      fxModule: 1,
      drumMachine: 1
    }
  };
  render() {
    return (
      <Aux>
        <DigitalSetup digitalGadgets={this.state.digitalGadgets} />
        <div>Build Controls</div>
      </Aux>
    );
  }
}

export default DigitalSetupBuilder;
