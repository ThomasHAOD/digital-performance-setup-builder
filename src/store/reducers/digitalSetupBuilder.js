import * as actionTypes from "../actions/actionsTypes";

const initialState = {
  digitalGadgets: { mixer: 0, deck: 0, synth: 0, drumMachine: 0, fxModule: 0 },
  totalPrice: 0
};

const GADGETS_PRICES = {
  deck: 200,
  mixer: 400,
  synth: 450,
  fxModule: 250,
  drumMachine: 550
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_GADGET:
      return {
        ...state,
        digitalGadgets: {
          ...state.digitalGadgets,
          [action.gadget]: state.digitalGadgets[action.gadget] + 1
        },
        totalPrice: state.totalPrice + GADGETS_PRICES[action.gadget]
      };
    case actionTypes.REMOVE_GADGET:
      return {
        ...state,
        digitalGadgets: {
          ...state.digitalGadgets,
          [action.gadget]: state.digitalGadgets[action.gadget] - 1
        },
        totalPrice: state.totalPrice - GADGETS_PRICES[action.gadget]
      };
    default:
      return state;
  }
  return state;
};

export default reducer;
