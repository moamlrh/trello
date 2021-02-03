import { Avatar } from "@material-ui/core";
import {
  Comment,
  MoreHoriz,
  Replay,
  SendOutlined,
} from "@material-ui/icons";
import React from "react";

const Home = () => {
  return (
    <div className="home">
      <div className="post">
        <div className="post-info">
          <p>1.1 do something special</p>
          <div className="actions">
            <div className="comments">
              <Comment />
              <span>2</span>
            </div>
            <div className="sent">
              <SendOutlined />
              <span>1/7</span>
            </div>
          </div>
        </div>
        <div className="footer">
          <span>First Team | Work With my group: todo</span>
        </div>
      </div>
      <div className="user-post">
        <div className="title">
          <div className="title-div">
            <Avatar />
            <div className="name">
              <h3>Moaml RH</h3>
              <span>6 days ago</span>
            </div>
          </div>
          <MoreHoriz />
        </div>
        <div className="body">
          <p>
            <span>@ahmedali </span> good to see you man
          </p>
        </div>
        <div className="reply">
          <Replay />
          <span>Reply</span>
        </div>
      </div>
    </div>
  );
};

export default Home;
