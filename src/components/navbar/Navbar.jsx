import NavLeft from "./comps/nav-left";
import NavRight from "./comps/nv-right";
import { Dashboard } from "@material-ui/icons";
import "./navbar.scss";
import { useSelector } from "react-redux";

function Navbar() {
  const board = useSelector((state) => state.boardsReducer.boardById);
  return (
    <div
      className="navbar"
      style={{
        backgroundColor: board && board.color,
      }}
    >
      <NavLeft />
      <div className="logo">
        <Dashboard />
        <h3>Trello</h3>
      </div>
      <NavRight />
    </div>
  );
}

export default Navbar;
