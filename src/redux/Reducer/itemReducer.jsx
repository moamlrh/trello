import { ADD_NEW_ITEM_TO_LIST_SAGA } from "../Actions/itemAction";

const initialState = {};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NEW_ITEM_TO_LIST_SAGA:
      return { ...state, ...payload };
    default:
      return state;
  }
};
