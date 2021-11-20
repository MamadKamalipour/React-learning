import React from "react";
import { NavLink } from "react-router-dom";
// icons
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
import { AiFillSetting } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
const Sidebar = () => {
  const links = [
    {
      title: "Dashboard",
      icon: SiGoogleanalytics,
      link:"/dashboard"
    },
    {
      title: "Send Money",
      icon: BiRocket,
      link:"sendmoney"
    },
    {
      title: "News",
      icon: BiNews,
      link:"/news"
    },
    {
      title: "Account",
      icon: MdAccountCircle,
      link:"/account"
    },
    {
      title: "Setting",
      icon: AiFillSetting,
      link:"/setting"
    },
  ];

  return <div className="sidebar">
    <div className="brand">
      <h2>MAMMAD <span>K9</span></h2>
    </div>
    <ul className="links">
      {
        links.map(link =>{
          return(
            <li key={link.title}>
              <NavLink to={link.link} activeClassName="active">{<link.icon />}{link.title}</NavLink>
              
            </li>
          )
        })
      }
    </ul>
  </div>;
};

export default Sidebar;
