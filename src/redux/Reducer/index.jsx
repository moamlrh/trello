import { combineReducers } from "@reduxjs/toolkit";
import boardsReducer from "./boardsReducer";

const rootReducer = combineReducers({
  //   listsStore,
  boardsReducer: boardsReducer
});

export default rootReducer;
