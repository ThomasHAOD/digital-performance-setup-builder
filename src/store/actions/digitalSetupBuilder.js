import * as actionTypes from "./actionsTypes";

export const addGadget = name => {
  return {
    type: actionTypes.ADD_GADGET,
    gadget: name
  };
};
export const removeGadget = name => {
  return {
    type: actionTypes.REMOVE_GADGET,
    gadget: name
  };
};
