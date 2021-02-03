import { useState } from "react";
import { ArrowDropDown, PeopleAltOutlined } from "@material-ui/icons";

function Items({ name, items }) {
  const [openItems, setOpenItems] = useState(false);
  return (
    <>
      <div className="title" onClick={() => setOpenItems(!openItems)}>
        <div className="text">
          <PeopleAltOutlined />
          <h3>{name}</h3>
        </div>
        <ArrowDropDown className="arrow-down" />
      </div>
      <div className="items" style={{ height: openItems ? "210px" : "0px" }}>
        {items.map(({ id, Icon, name }) => (
          <div key={id} className="item">
            <Icon />
            <h5>{name}</h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default Items;
