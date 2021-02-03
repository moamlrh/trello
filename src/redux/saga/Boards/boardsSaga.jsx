import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  CREATE_NEW_BOARD_SAGA,
  getAllBoards,
  getBoardById,
  GET_ALL_BOARD_SAGA,
  GET_BOARD_BY_ID_SAGA,
  updateListsAfterDrag,
  UPDATE_LISTS_AFTER_DRAG_SAGA,
} from "../../Actions/boardsAction";
import {
  getBoardsByIdAPI,
  createNewBoardAPI,
  updateBoardAfterDragAPI,
  getAllBoardsAPI,
  deletBoardAPI,
  addStarToBoardAPI,
} from "../api/boardsAPI";
import { NotificationManager } from "react-notifications";
// -------------------------------- Get All Boards
function* getAllBoardsSaga(action) {
  try {
    const boards = yield call(getAllBoardsAPI, action.allBoards);
    yield put(getAllBoards(boards));
  } catch (error) {
    yield alert(error.message);
  }
}

export function* watchGetAllBoards() {
  yield takeEvery(GET_ALL_BOARD_SAGA, getAllBoardsSaga);
}

//  ------------------------ Get Boards By Id
function* getBoardByIdSaga(action) {
  try {
    const response = yield call(getBoardsByIdAPI, action.id);
    yield put(getBoardById(response));
  } catch (error) {
    yield alert(error.message);
  }
}

export function* WatchGetBoards() {
  yield takeEvery(GET_BOARD_BY_ID_SAGA, getBoardByIdSaga);
}

// ------------------------------- create new Board
function* createNewBoardSaga(action) {
  const { newBoard, history } = action.payload;
  try {
    yield call(createNewBoardAPI, newBoard);
    yield history.push(`/b/${newBoard.id}`);
  } catch (error) {
    yield alert(error.message);
  }
}

export function* watchCreateNewBoard() {
  yield takeLatest(CREATE_NEW_BOARD_SAGA, createNewBoardSaga);
}

//  --------------------------- update board after drag
function* updateBoardAfterDragSaga(action) {
  try {
    yield call(updateBoardAfterDragAPI, action.payload);
    yield put(updateListsAfterDrag(action.payload));
  } catch (error) {
    yield alert(error.message);
  }
}

export function* watchUpdateBoardAfterDrag() {
  yield takeEvery(UPDATE_LISTS_AFTER_DRAG_SAGA, updateBoardAfterDragSaga);
}

// ----------------------- delete board

export const DELETE_BOARD_SAGA = "DELETE_BOARD_SAGA";
export const ALERT_NOTIFICATION = "ALERT_NOTIFICATION";

function* deleteBoardSaga(action) {
  try {
    yield call(deletBoardAPI, action.id);
    yield put({ type: GET_ALL_BOARD_SAGA });
    yield NotificationManager.success(
      "The Board deleted successful!",
      "Deleted Success",
      2000
    );
  } catch (error) {
    yield NotificationManager.warning(
      "The Board not deleted !",
      "Deleted failur",
      2000
    );
  }
}

export function* watchDeleteBoard() {
  yield takeEvery(DELETE_BOARD_SAGA, deleteBoardSaga);
}

// --------------------------------- starrted board
export const ADD_STAR_TO_BOARD = "ADD_STAR_TO_BOARD";
export const ADD_STAR_TO_BOARD_SAGA = "ADD_STAR_TO_BOARD_SAGA";
function* addStarToBoardSaga(action) {
  try {
    yield call(addStarToBoardAPI, { ...action.payload });
  } catch (error) {
    yield alert(error.message);
  }
}

export function* watchAddStartToBoard() {
  yield takeLatest(ADD_STAR_TO_BOARD_SAGA, addStarToBoardSaga);
}
