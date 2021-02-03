import { Collapse } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uid } from "uid";
import { ADD_NEW_ITEM_TO_LIST_SAGA } from "../../../../redux/Actions/itemAction";

const AddNewItem = ({ list, board, index }) => {
  const [open, setOpen] = useState(false);
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const handleAddNewItem = () => {
    if(item.length < 1) return
    const newItem = {
      id: uid(),
      title: item,
    };
    const currList = board.lists[index];
    if (currList.items) {
      currList.items.push(newItem);
    } else {
      currList["items"] = [newItem];
    }
    dispatch({
      type: ADD_NEW_ITEM_TO_LIST_SAGA,
      payload: {
        board,
        currList,
        list,
      },
    });
    setItem('')
  };
  return (
    <>
      <Collapse in={open}>
        <input
          type="text"
          placeholder="new item...."
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <div className="actions">
          <button onClick={handleAddNewItem}>Add New item +</button>
          <Close className="close" onClick={() => setOpen(!open)} />
        </div>
      </Collapse>
      <Collapse in={!open}>
        <div className="add-text" onClick={() => setOpen(!open)}>
          <h3>Add New item </h3>
        </div>
      </Collapse>
    </>
  );
};

export default AddNewItem;
