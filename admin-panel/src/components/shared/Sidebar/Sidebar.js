import React from "react";
import { NavLink } from "react-router-dom";
// icons
import { SiGoogleanalytics } from "react-icons/si";
import { BiNews, BiRocket } from "react-icons/bi";
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
              <NavLink to={link.link} activeclassname="active">{<link.icon />}{link.title}</NavLink>
              
            </li>
          )
        })
      }
    </ul>
  </div>;
};

export default Sidebar;
