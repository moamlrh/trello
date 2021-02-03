import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  GET_BOARD_BY_ID_SAGA,
  UPDATE_LISTS_AFTER_DRAG_SAGA,
} from "../../redux/Actions/boardsAction";
import { UPDATE_ITEMS_AFTER_DRAG_SAGA } from "../../redux/saga/item/itemSaga";
import "./BoardContent.scss";
import AddNewList from "./comps/add-input/AddNewList";
import Lists from "./comps/Board/Lists";

function BoardContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const boardsReducer = useSelector((state) => state.boardsReducer);
  const boardById = useSelector((state) => state.boardsReducer.boardById);
  useEffect(() => {
    dispatch({ type: GET_BOARD_BY_ID_SAGA, id });
  }, [dispatch, id]);

  if (!boardById)
    return (
      <div className="loading">
        <CircularProgress />
      </div>
    );

  const onDragEnd = (res) => {
    const { destination, source, type } = res;
    if (!destination || !boardsReducer) return;

    if (type === "lists") {
      const [movedList] = boardById.lists.splice(source.index, 1);
      boardById.lists.splice(destination.index, 0, movedList);
      dispatch({
        type: UPDATE_LISTS_AFTER_DRAG_SAGA,
        payload: boardById,
      });
    } else {
      const sourceItems = boardById.lists.filter(
        (list) => list.id === source.droppableId
      )[0].items;
      const targetItems =
        source.droppableId !== destination.droppableId
          ? boardById.lists.filter(
              (list) => list.id === destination.droppableId
            )[0].items
          : sourceItems;
      if (!targetItems) {
        const newTargetItems = (boardById.lists.filter(
          (list) => list.id === destination.droppableId
        )[0].items = []);
        const [movedItem] = sourceItems.splice(source.index, 1);
        newTargetItems.splice(destination.index, 0, movedItem);
      } else {
        const [movedItem] = sourceItems.splice(source.index, 1);
        targetItems.splice(destination.index, 0, movedItem);
      }
      dispatch({ type: UPDATE_ITEMS_AFTER_DRAG_SAGA, boardById });
    }
  };
  return (
    <div
      className="board-content"
      style={{
        backgroundColor: boardById.color && boardById.color,
      }}
    >
      <DragDropContext onDragEnd={onDragEnd}>
        <h1>{boardById.title}</h1>
        <div className="container-list-create">
          <div className="lists-container">
            <Droppable droppableId="lists" type="lists" direction="horizontal">
              {(prov) => (
                <div
                  className="lists"
                  ref={prov.innerRef}
                  {...prov.droppableProps}
                >
                  {boardById.lists &&
                    boardById.lists.map((list, index) => (
                      <Lists
                        list={list}
                        index={index}
                        key={list.id}
                        board={boardById}
                        color={boardById.color && boardById.color}
                      />
                    ))}
                  {prov.placeholder}
                </div>
              )}
            </Droppable>
          </div>
          <div className="add-new-lists">
            <AddNewList board={boardById} />
          </div>
        </div>
      </DragDropContext>
    </div>
  );
}

export default BoardContent;
