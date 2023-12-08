import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import { SidebarData } from "./SidebarData";
import "./Sidebar.css";
import { IconContext } from "react-icons/lib";
import LoanEaseLogoSmall from "../../LoanEaseLogo-sm.png";
import user from "./Ellipse.png";
import LoanEaseLogoWhite from "../../LoanEaseLogo-White.png";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  useEffect(() => {
    const handleResize = () => {
      setSidebar(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <IconContext.Provider value={{ color: "white" }} style={{ zIndex: 1000 }}>
        <div className="navbar d-flex justify-content-between px-4 d-non d-md-none">
          <Link to="#" className="menu-bars p-2">
            <img src={LoanEaseLogoSmall} className="d-inline-block align-top logo_LoanEase" alt="LoanEase" />
          </Link>
          <Link to="#" className="menu-bars p-2 ">
            <FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={`${sidebar ? "nav-menu active" : "nav-menu"} lg-screen`} style={{ zIndex: 1000 }}>
          <ul className="nav-menu-items p-0 h-100 nav-menu-ul" onClick={showSidebar}>
            <ul className="m-0 p-0 d-flex flex-column justify-content-around">
              <li className="sm-screen"></li>
              <li className="navbar-toggle px-4 d-flex justify-content-end d-non d-md-none">
                <Link to="#" className="menu-bars">
                  <AiOutlineClose />
                </Link>
              </li>
              <li className="text-center p-3 rounded sm-screen">
                <img src={user} alt="LoanEaseLogo" className="img-fluid rounded-circle" />
              </li>
              <ul className="m-0 p-0">
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.className}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </ul>
            <li className="text-center p-4 pb-2 sm-screen">
              <img src={LoanEaseLogoWhite} alt="LoanEaseLogo" className="img-fluid" style={{ maxWidth: "100px", marginBottom: "10px" }} />
            </li>
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
