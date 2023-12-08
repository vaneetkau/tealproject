import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import HeroSection from "../LandingPage/HeroSection";
import LatestNews from "../LatestNews/LatestNews";
import MyProfile from "../MyProfile";

export const SidebarData = [
  {
    title: "Home",
    path: "/Home",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Latest News",
    path: "/LatestNews",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text",
  },
  {
    title: "Get Advice",
    path: "/LoanAdvice",
    icon: <FaIcons.FaExclamationCircle />,
    className: "nav-text",
  },
  {
    title: "Get your ease",
    path: "/LoanList",
    icon: <FaIcons.FaMousePointer />,
    className: "nav-text",
  },
  {
    title: "Settings",
    path: "/MyProfile",
    // icon: <FaIcons.FaEnvelopeOpenText />,
    icon: <FaIcons.FaCog />,
    className: "nav-text",
  },
  {
    title: "Log Out",
    path: "/",
    icon: <FaIcons.FaSignOutAlt />,
    className: "nav-text",
  },
];
