//  -------------------------------- get board by id
export const GET_BOARD_BY_ID = "GET_BOARD_BY_ID";
export const GET_BOARD_BY_ID_SAGA = "GET_BOARD_BY_ID_SAGA";

export const getBoardById = (boardById) => ({
  type: GET_BOARD_BY_ID,
  boardById,
});

//  -------------------------------- get all boards
export const GET_ALL_BOARD = "GET_ALL_BOARD";
export const GET_ALL_BOARD_SAGA = "GET_ALL_BOARD_SAGA";

export const getAllBoards = (allBoards) => ({
  type: GET_ALL_BOARD,
  allBoards,
});

//  -------------------------------- create new board
export const CREATE_NEW_BOARD = "CREATE_NEW_BOARD";
export const CREATE_NEW_BOARD_SAGA = "CREATE_NEW_BOARD_SAGA";

export const createNewBoard = (newBoard) => ({
  type: CREATE_NEW_BOARD,
  newBoard,
});


//  -------------------------------- update lists after drag and drop
export const UPDATE_LISTS_AFTER_DRAG = "UPDATE_LISTS_AFTER_DRAG"
export const UPDATE_LISTS_AFTER_DRAG_SAGA = "UPDATE_LISTS_AFTER_DRAG_SAGA"
export const updateListsAfterDrag = (boardAfterDrag) => ({
  type: UPDATE_LISTS_AFTER_DRAG,
  boardAfterDrag,
});

//  -------------------------------- update board in store not server 
export const UPDATE_BOARD = "UPDATE_BOARD"
export const updateBoardInStore = (updateBoardById) => ({
  type: UPDATE_BOARD,
  updateBoardById
})