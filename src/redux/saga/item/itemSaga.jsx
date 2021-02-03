import { call, put, takeEvery } from "redux-saga/effects";
import { GET_BOARD_BY_ID_SAGA } from "../../Actions/boardsAction";
import { ADD_NEW_ITEM_TO_LIST_SAGA } from "../../Actions/itemAction";
import {
  addNewItemAPI,
  deleteItemAPI,
  updateItemAfterDragAPI,
} from "../api/itemsAPI";

// ------------------------------------- add new item
function* addNewListSaga(action) {
  try {
    yield call(addNewItemAPI, { ...action.payload });
    yield put({ type: GET_BOARD_BY_ID_SAGA, id: action.payload.board.id });
  } catch (error) {
    yield alert(error.message);
  }
}

export function* watchAddNewList() {
  yield takeEvery(ADD_NEW_ITEM_TO_LIST_SAGA, addNewListSaga);
}

// -------------------------------------  update items in lists
export const UPDATE_ITEMS_AFTER_DRAG_SAGA = "UPDATE_ITEMS_AFTER_DRAG_SAGA";
function* updateItemAfterDragSaga(action) {
  try {
    yield call(updateItemAfterDragAPI, { ...action });
  } catch (error) {
    yield alert(error.message);
  }
}

export function* watchUpdateItemAfterDrag() {
  yield takeEvery(UPDATE_ITEMS_AFTER_DRAG_SAGA, updateItemAfterDragSaga);
}
// -------------------------------------  delete item
export const DELETE_ITEM = "DELETE_ITEM";
export const DELETE_ITEM_SAGA = "DELETE_ITEM_SAGA";
function* deleteItemSaga(action) {
  try {
    yield call(deleteItemAPI, { ...action });
    yield put({ type: GET_BOARD_BY_ID_SAGA, id: action.board.id });
  } catch (error) {
    yield alert(error.message);
  }
}

export function* watchDeleteItemSaga() {
  yield takeEvery(DELETE_ITEM_SAGA, deleteItemSaga);
}
