import * as actionTypes from "./actions";

const initialState = {
  digitalGadgets: { mixer: 0, deck: 0, synth: 0, drumMachine: 0, fxModule: 0 },
  totalPrice: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GADGET:
      return {
        ...state,
        digitalGadgets: {
          ...state.digitalGadgets,
          [action.gadget]: state.digitalGadgets[action.gadget] + 1
        }
      };
    case actionTypes.REMOVE_GADGET:
      return {
        ...state,
        digitalGadgets: {
          ...state.digitalGadgets,
          [action.gadget]: state.digitalGadgets[action.gadget] - 1
        }
      };
    default:
      return state;
  }
  return state;
};

export default reducer;
