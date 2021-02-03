import { Delete } from "@material-ui/icons";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_ITEM_SAGA } from "../../../../redux/saga/item/itemSaga";

const Items = ({ item, index, listIndex }) => {
  const board = useSelector((state) => state.boardsReducer.boardById);
  const dispatch = useDispatch();
  const handleDeleteItem = () => {
    board.lists[listIndex].items.splice(index, 1);
    dispatch({ type: DELETE_ITEM_SAGA, board });
  };
  return (
    <Draggable index={index} draggableId={item.id}>
      {(prov) => (
        <div
          className="item"
          ref={prov.innerRef}
          {...prov.draggableProps}
          {...prov.dragHandleProps}
        >
          <h4>{item.title}</h4>
          <Delete className="delete-icon" onClick={handleDeleteItem} />
        </div>
      )}
    </Draggable>
  );
};

export default Items;
