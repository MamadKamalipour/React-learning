import React,{useContext} from "react";
import { Link } from "react-router-dom";

// icons
import { VscArrowSwap } from "react-icons/vsc";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import avatar from "../../../assets/profile.png";
// context
import { userContext } from "../../../context/UserContextProvider";
const Navbar = () => {
  const user  = useContext(userContext)
  return (
    <div className="navbar">
      <div className="avatar">
        <img src={avatar} alt="" />
        <div className="info">
          <h4 className="title">{`${user.user.name} ${user.user.fname}`}</h4>
          <h6 className="status">{user.user.status}</h6>
        </div>
      </div>
      <Link to="/sendmoney">
        <div className="quick">
          <button>
            <VscArrowSwap />
            Quick Transition
          </button>
        </div>
      </Link>
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
