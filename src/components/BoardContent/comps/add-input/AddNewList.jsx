import { Collapse } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uid } from "uid";
import { ADD_NEW_LIST_TO_BOARD_SAGA } from "../../../../redux/Actions/listsAction";

const CreateNewList = ({ board }) => {
  const [open, setOpen] = useState(false);
  const [list, setList] = useState("");
  const dispatch = useDispatch();

  const handleAddNewlist = () => {
    setOpen(!open);
    dispatch({
      type: ADD_NEW_LIST_TO_BOARD_SAGA,
      payload: {
        board,
        newList: {
          id: uid(),
          title: list,
          items:[]
        },
      },
    });
  };
  return (
    <>
      <Collapse in={open}>
        <input
          type="text"
          placeholder="new list...."
          value={list}
          onChange={(e) => setList(e.target.value)}
        />
        <div className="actions">
          <button onClick={handleAddNewlist}>Add New List +</button>
          <Close className="close" onClick={() => setOpen(!open)} />
        </div>
      </Collapse>
      <Collapse in={!open}>
        <div className="add-text" onClick={() => setOpen(!open)}>
          <h3>Add New List </h3>
        </div>
      </Collapse>
    </>
  );
};

export default CreateNewList;
