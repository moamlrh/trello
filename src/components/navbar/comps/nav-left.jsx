import { AppsOutlined, Search, Home, Dashboard } from "@material-ui/icons";
import { Link } from "react-router-dom";

function NavLeft() {
  return (
    <div className="nv-left">
      <div className="left-items apps">
        <AppsOutlined />
      </div>
      <div className="left-items home">
        <Link to='/home' className='link'>
          <Home />
        </Link>
      </div>
      <div className="left-items boards">
        <Link to='/boards' className='link'>
        <Dashboard />
        <span>Boards</span>
        </Link>
      </div>
      <div className="search">
        <input className="input" variant="outlined" />
        <Search className="search-icon" />
      </div>
    </div>
  );
}

export default NavLeft;
