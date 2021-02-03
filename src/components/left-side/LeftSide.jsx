import "./leftside.scss";
import { tabs, items, teams } from "./cons";
import { Add } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Items from "./Items";

function LeftSide() {
  const [activeTabId, setActiveTabId] = useState(3);
 
  return (
    <div className="left-side">
      <div className="tabs">
        {tabs.map(({ title, id, url, Icon }) => (
          <Link
            to={url}
            className="link tab"
            onClick={() => setActiveTabId(id)}
          >
            <div
              className={`tab ${id === activeTabId && "active-tab"}`}
              key={id}
            >
              <Icon />
              <h3>{title}</h3>
            </div>
          </Link>
        ))}
      </div>
      <div className="teams">
        <div className="add-new-team">
          <span>TEAMS</span>
          <Add className="icon" />
        </div>
        {teams.map(({ id, name }) => (
          <div key={id} className={`team ${id}`}>
            <Items name={name} items={items} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LeftSide;
