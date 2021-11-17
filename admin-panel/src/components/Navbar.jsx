import React from "react";

// icons
import { VscArrowSwap } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import avatar from "../assets/profile.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="avatar">
        <img src={avatar} alt="" />
        <div className="info">
          <h4 className="title">Mohammad kamalipour</h4>
          <h6 className="status">Online</h6>
        </div>
      </div>
      <div className="quick">
        <button>
          <VscArrowSwap />
          Quick Transition
        </button>
      </div>
      <div className="navbar__info">
        <IoMdNotificationsOutline />
        <FiMail />
        <div className="search__bar">
          <input type="text" placeholder="Search" />
          <FaSearch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
