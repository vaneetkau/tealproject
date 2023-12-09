import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegNewspaper } from "react-icons/fa";
import { BsCursor } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { GrFlag } from "react-icons/gr";
import HeroSection from "../LandingPage/HeroSection";
import LatestNews from "../LatestNews/LatestNews";
import MyProfile from "../MyProfile";

import GetYourEaseIcon from "./GetYourEase.png";

export const SidebarData = [
  {
    title: "Home",
    path: "/Dashboard",
    icon: <IoHomeOutline />,
    className: "nav-text px-3 ",
  },
  {
    title: "Latest News",
    path: "/LatestNews",
    icon: <GrFlag />,
    className: "nav-text px-3 ",
  },
  {
    title: "Get Advice",
    path: "/LoanAdvice",
    icon: <BsExclamationCircle />,
    className: "nav-text px-3 ",
  },
  {
    title: "Get your ease",
    path: "/LoanList",
    icon: <BsCursor />,
    className: "nav-text px-3",
  },
  {
    title: "Settings",
    path: "/MyProfile",
    icon: <IoSettingsOutline />,
    className: "nav-text px-3",
  },
  {
    title: "Log Out",
    path: "/",
    icon: <IoIosLogOut />,
    className: "nav-text px-3",
  },
];
