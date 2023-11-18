import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home as HomeIcon,
  Public as PublicIcon,
  EventNote as EventNoteIcon,
  CheckBox as CheckBoxIcon,
  Payment as PaymentIcon,
  Settings as SettingsIcon,
  PowerSettingsNew as PowerSettingsNewIcon,
} from '@mui/icons-material';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/Main">
            <HomeIcon />
            Main
          </Link>
        </li>
        <li>
          <Link to="/Home">
            <HomeIcon />
            Home
          </Link>
        </li>
        <li>
          <Link to="/LatestNews">
            <PublicIcon />
            Latest News
          </Link>
        </li>
        <li>
          <Link to="/get-advise">
            <EventNoteIcon />
            Get Advise
          </Link>
        </li>
        <li>
          <Link to="/get-your-case">
            <CheckBoxIcon />
            Get your case
          </Link>
        </li>
        <li>
          <Link to="/my-pay">
            <PaymentIcon />
            My Pay
          </Link>
        </li>
        <li>
          <Link to="/settings">
            <SettingsIcon />
            Settings
          </Link>
        </li>
        <li>
          <Link to="/log-out">
            <PowerSettingsNewIcon />
            Log Out
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
