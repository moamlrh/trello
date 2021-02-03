import { Avatar } from "@material-ui/core";
import {
  AddOutlined,
  InfoOutlined,
  NotificationsNoneOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import NotifMenu from "./notifMenu";
import UserMenu from "./userMenu";

function NavRight() {
  const [openUserMenu, setOpenUserMenu] = useState(null);
  const [openNotifMenu, setOpenNotifMenu] = useState(null);
  return (
    <div className="nv-right">
      <div className="plus">
        <AddOutlined />
      </div>
      <div className="info">
        <InfoOutlined />
      </div>
      <div className="notifications" onClick={(event) => setOpenNotifMenu(event.currentTarget)}>
        <NotificationsNoneOutlined />
      </div>
      <NotifMenu
        openNotifMenu={openNotifMenu}
        setOpenNotifMenu={setOpenNotifMenu}
      />
      <div
        className="user"
        onClick={(event) => setOpenUserMenu(event.currentTarget)}
      >
        <Avatar />
      </div>
      <UserMenu openUserMenu={openUserMenu} setOpenUserMenu={setOpenUserMenu} />
    </div>
  );
}

export default NavRight;
