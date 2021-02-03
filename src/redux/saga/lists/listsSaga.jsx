import { call, put, takeEvery } from "redux-saga/effects";
import { GET_BOARD_BY_ID_SAGA } from "../../Actions/boardsAction";
import { ADD_NEW_LIST_TO_BOARD_SAGA } from "../../Actions/listsAction";
import { addNewListAPI } from "../api/listsAPI";

function* createNewListSaga(action) {
  const { board, newList } = action.payload;
  try {
    yield call(addNewListAPI, { board, newList });
    yield put({
      type: GET_BOARD_BY_ID_SAGA,
      id: board.id,
    });
  } catch (error) {
    yield alert(error.message)
  }
}

export function* watchCreateNewList() {
  yield takeEvery(ADD_NEW_LIST_TO_BOARD_SAGA, createNewListSaga);
}
