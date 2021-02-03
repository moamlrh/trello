import { useState } from "react";
import { Dialog, NativeSelect, withStyles } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { CREATE_NEW_BOARD_SAGA } from "../../../../redux/Actions/boardsAction";
import { useHistory } from "react-router-dom";
import { uid } from "uid";

var colorArray = [
  "#FF6633",
  "#FF33FF",
  "#00B3E6",
  "#E6B333",
  "#3366E6",
  "#999966",
  "#99FF99",
  "#B34D4D",
  "#80B300",
  "#809900",
  "#6680B3",
  "#66991A",
];
const StyledDialog = withStyles(() => ({
  container: {
    transform: "translate(0px,-30%)",
    left: "25px",
  },
  root: {},
}))(Dialog);

export default function DialogCreateNewBoard() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [selectValue, setSelectValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const [color, setColor] = useState(null);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleAddNewBoards = async () => {
    if (value.length < 1) return;
    const newBoard = {
      id: uid(),
      title: value,
      created_at: new Date().toDateString(),
      created_by: "user name",
      admin: "admin",
      memebers: [],
      color,
      type: selectValue,
    };
    dispatch({ type: CREATE_NEW_BOARD_SAGA, payload: { newBoard, history } });
  };
  return (
    <>
      <div className="create" onClick={handleClickOpen}>
        <span>Create new board</span>
      </div>
      <StyledDialog open={open} onClose={handleClose}>
        <div
          className="create-new-board"
          style={{
            backgroundColor: color && color,
          }}
        >
          <div className="info">
            <div className="input">
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Add board title"
              />
            </div>
            <div className="team-visible">
              <NativeSelect
                value={selectValue}
                onChange={(e) => setSelectValue(e.target.value)}
                variant="standard"
              >
                <option aria-label="None" value="" />
                <option value="private">Private</option>
                <option value="team">Team</option>
                <option value="public">Public</option>
              </NativeSelect>
            </div>
          </div>
          <div className="colors">
            {colorArray.map((color) => (
              <div
                className={`color`}
                style={{ backgroundColor: color }}
                onClick={() => setColor(color)}
              ></div>
            ))}
          </div>
        </div>
        <div className="action">
          <button onClick={handleAddNewBoards}>Create Board</button>
        </div>
      </StyledDialog>
    </>
  );
}
