import { Avatar, Menu, MenuItem } from "@material-ui/core";
import React from "react";

function UserMenu({ openUserMenu, setOpenUserMenu }) {
  return (
    <div className="user-container">
      <Menu
        elevation={0}
        anchorEl={openUserMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        keepMounted
        getContentAnchorEl={null}
        open={Boolean(openUserMenu)}
        onClose={() => setOpenUserMenu(null)}
      >
        <div className="user-menu">
          <div className="title">
            <span>Account</span>
          </div>
          <div className="info">
            <Avatar />
            <div className="user-info">
              <h4>Moaml Rh</h4>
              <span>moamll@gmail.com</span>
            </div>
          </div>
          <div className="items">
            <MenuItem>Setting</MenuItem>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Register</MenuItem>
            <MenuItem>Account</MenuItem>
            <MenuItem>Test</MenuItem>
          </div>
        </div>
      </Menu>
    </div>
  );
}

export default UserMenu;
