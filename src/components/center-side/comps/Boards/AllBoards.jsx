import { Close, FiberManualRecord } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  ADD_STAR_TO_BOARD_SAGA,
  DELETE_BOARD_SAGA,
} from "../../../../redux/saga/Boards/boardsSaga";
import DialogDeleteBoard from "./DialogDeleteBoard";
import { NotificationContainer } from "react-notifications";
import "react-notifications/lib/notifications.css";

const AllBoards = ({ board }) => {
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const dispatch = useDispatch();
  const [starttedd, setStarrted] = useState(board.startted);
  const handleDeletBoard = () => {
    dispatch({ type: DELETE_BOARD_SAGA, id: board.id });
    setOpenDeleteDialog(!openDeleteDialog);
  };
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialog(!openDeleteDialog);
  };
  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(!openDeleteDialog);
  };
  const handleStarToBoard = () => {
    setStarrted(!starttedd);
    dispatch({
      type: ADD_STAR_TO_BOARD_SAGA,
      payload: { board, startted: !starttedd },
    });
  };
  return (
    <div className="board">
      <div className="header">
        <Link to={`b/${board.id}`} className="link">
          <h4>
            {board.title.length > 20
              ? board.title.substring(1, 18) + "..."
              : board.title}
          </h4>
        </Link>
        <Close className="delete" onClick={handleOpenDeleteDialog} />
        <DialogDeleteBoard
          open={openDeleteDialog}
          handleDeletBoard={handleDeletBoard}
          handleClose={handleCloseDeleteDialog}
        />
      </div>
      <div
        className="info"
        style={{
          backgroundColor: board.color && board.color,
        }}
      >
        <p>{board.created_by}</p>
        <div className="footer">
          <FiberManualRecord
            style={{ cursor: "pointer", color: starttedd ? "yellow" : "gray" }}
            onClick={handleStarToBoard}
          />
        </div>
      </div>
      <NotificationContainer />
    </div>
  );
};

export default AllBoards;
