import {
  ArrowDropDown,
  CloseOutlined,
  MenuOutlined,
  NotificationImportant,
  Search,
} from "@material-ui/icons";
import React, { useRef, useState } from "react";

import "./navbar.scss";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileNav = useRef();

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  const handleMenu = () => {
    mobileNav.current.classList.toggle("nav-open");
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img src="/images/Netflix_logo.png" alt="" />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <div className="desktop-options">
            <Search className="icon" />
            <span>KID</span>
            <NotificationImportant className="icon" />
            <img src="/images/profile_img.webp" alt="" />

            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>Settings</span>
                <span>Logout</span>
              </div>
            </div>
          </div>
          <button className="btn-mobile-nav">
            <MenuOutlined className="menu-outline" onClick={handleMenu} />
          </button>
        </div>
      </div>
      <div className="mobile-nav" ref={mobileNav}>
        <div className="header">
          <CloseOutlined className="close-outline" onClick={handleMenu} />
        </div>

        <div className="mobile-nav-list">
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
          <span>Settings</span>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
