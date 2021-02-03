// ---------------------------------- add new list
export const ADD_NEW_LIST_TO_BOARD = "ADD_NEW_LIST_TO_BOARD";
export const ADD_NEW_LIST_TO_BOARD_SAGA = "ADD_NEW_LIST_TO_BOARD_SAGA";

export const addNewListToBoard = (boardId, item) => ({
  type: ADD_NEW_LIST_TO_BOARD,
  payload: { boardId, item },
});
