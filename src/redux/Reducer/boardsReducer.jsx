import {
  GET_BOARD_BY_ID,
  GET_ALL_BOARD,
  CREATE_NEW_BOARD,
  UPDATE_LISTS_AFTER_DRAG,
  UPDATE_BOARD,
} from "../Actions/boardsAction";
import { ALERT_NOTIFICATION } from "../saga/Boards/boardsSaga";

const initialState = {
  boards: [],
  boardById: null,
  loading: true,
  notif: { success: false, error: false, msg: "" },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOARD_BY_ID:
      const { boardById } = action;
      console.log(boardById);
      return { ...state, boardById };
    case GET_ALL_BOARD:
      const { allBoards } = action;
      return {
        ...state,
        boards: allBoards,
      };

    case CREATE_NEW_BOARD:
      const { newBoard } = action;
      return {
        ...state,
        boardById: null,
        boards: [newBoard, ...state.boards],
        loading: false,
      };
    case UPDATE_LISTS_AFTER_DRAG:
      const { boardAfterDrag } = action;
      return {
        ...state,
        boardById: boardAfterDrag,
      };
    case ALERT_NOTIFICATION:
      return {
        ...state,
        notif: { success: true, error: false, msg: action.payload },
      };
      case UPDATE_BOARD:
        const {updateBoardById} = action;
        return {
          ...state,
          boardById: updateBoardById
        }
    default:
      return state;
  }
};
