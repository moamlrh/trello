import { Menu, MenuItem } from "@material-ui/core";
import React from "react";

function NotifMenu({ openNotifMenu, setOpenNotifMenu }) {
  return (
    <Menu
      elevation={0}
      anchorEl={openNotifMenu}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "left",
      }}
      keepMounted
      getContentAnchorEl={null}
      open={Boolean(openNotifMenu)}
      onClose={() => setOpenNotifMenu(null)}
    >
      <div className="notif-menu">
        <div className="title">
          <span>Notifications</span>
        </div>
        <div className="items">
            <span>There are no Notification !</span>
        </div>
      </div>
    </Menu>
  );
}

export default NotifMenu;
