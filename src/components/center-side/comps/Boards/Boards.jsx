import {
  AccessTimeOutlined,
  FiberManualRecord,
  StarRateOutlined,
} from "@material-ui/icons";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ALL_BOARD_SAGA } from "../../../../redux/Actions/boardsAction";
import AllBoards from "./AllBoards";
import DialogCreateNewBoard from "./CreateNewBoard";

function Boards() {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boardsReducer.boards);
  useEffect(() => {
    dispatch({ type: GET_ALL_BOARD_SAGA });
  }, [boards]);
  return (
    <div className="boards">
      <div className="starrted">
        {boards &&
          Object.entries(boards)
            .filter(([key, board]) => board.startted === true)
            .map(([key, board]) => (
              <div className="board" key={key}>
                <div className="header">
                  <StarRateOutlined />
                  <h4>{board.title}</h4>
                </div>
                <div className="info">
                  <p>{board.type + ' |  '  + board.created_by}</p>
                  <div className="footer">
                    <span>{board.created_at}</span>
                    <StarRateOutlined style={{color:'yellow'}}/>
                  </div>
                </div>
              </div>
            ))}
      </div>
      <div className="viewed">
        <div className="header">
          <AccessTimeOutlined />
          <h4>Recently Viewed</h4>
        </div>
        <div className="info">
          <p>Test Group</p>
          <div className="footer">
            <FiberManualRecord />
          </div>
        </div>
      </div>
      <DialogCreateNewBoard />
      <div className="all-boards">
        {boards &&
          Object.entries(boards).map(([key, board]) => (
            <AllBoards key={key} board={board} />
          ))}
      </div>
    </div>
  );
}

export default Boards;
