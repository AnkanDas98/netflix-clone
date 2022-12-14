import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React, { useState } from "react";

import "./listitem.scss";

const ListItem = ({ index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const trailer = "/videos/demo.mp4";

  const screenSize = window.matchMedia("(max-width: 46em)");

  return (
    <div
      className="listitem"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // style={
      //   !screenSize.matches && {
      //     left: isHovered && index * 230 - 50 + index * 2.5,
      //   }
      // }
      // style={{
      //   left: isHovered
      //     ? screenSize.matches
      //       ? index * 230
      //       : index * 230 - 50 + index * 2.5
      //     : "",
      // }}
      style={{
        left:
          isHovered && !screenSize.matches
            ? index * 230 - 50 + index * 2.5
            : "",
      }}
    >
      <img src="/images/Joker-movie-thumbnail2.jpg" alt="" />

      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop></video>
          <div className="item-info">
            <div className="icons">
              <PlayArrow className="icon" />
              <Add className="icon" />
              <ThumbUpAltOutlined className="icon" />
              <ThumbDownAltOutlined className="icon" />
            </div>
            <div className="item-info-top">
              <span>1 hour 14 mins</span>
              <span className="limit">20+</span>
              <span>2020</span>
            </div>
            <div className="desc">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
              excepturi quae soluta a sed est atque dolores, magni, iste nisi
            </div>
            <div className="genre">Action</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
