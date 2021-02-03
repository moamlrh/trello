import { all } from "redux-saga/effects";
import {
  watchCreateNewBoard,
  watchGetAllBoards,
  WatchGetBoards,
  watchUpdateBoardAfterDrag,
  watchDeleteBoard,watchAddStartToBoard
} from "./Boards/boardsSaga";
import {
  watchAddNewList,
  watchDeleteItemSaga,
  watchUpdateItemAfterDrag,
} from "./item/itemSaga";
import { watchCreateNewList } from "./lists/listsSaga";

export default function* rootSaga() {
  yield all([
    watchGetAllBoards(),
    WatchGetBoards(),
    watchCreateNewBoard(),
    watchCreateNewList(),
    watchUpdateBoardAfterDrag(),
    watchDeleteBoard(),
    watchAddNewList(),
    watchUpdateItemAfterDrag(),
    watchDeleteItemSaga(),
    watchAddStartToBoard()
  ]);
}
