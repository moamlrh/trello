//  ----------------- add new list
export const ADD_NEW_ITEM_TO_LIST = " ADD_NEW_ITEM_TO_LIST";
export const ADD_NEW_ITEM_TO_LIST_SAGA = " ADD_NEW_ITEM_TO_LIST_SAGA";
export const addNewItemToList = (board, newList) => ({
  type: ADD_NEW_ITEM_TO_LIST,
  payload: { newList, board },
});
