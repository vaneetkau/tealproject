// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Logo</div>
      <div style={navLinksStyle}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/FaqPage">FAQ</Link>
        <Link to="/TandCPage">T&C</Link>
      </div>
      <div style={loginButtonStyle}>
        {' '}
        <Link to="/LoginFromLandingPage">Login</Link>
      </div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#f0f0f0',
};

const logoStyle = {
  flex: 1,
};

const navLinksStyle = {
  flex: 2,
  display: 'flex',
  justifyContent: 'center',
};

const loginButtonStyle = {
  flex: 1,
  textAlign: 'right',
};

// Add responsive styles
const responsiveStyles = {
  headerStyle: {
    flexDirection: 'column',
  },
  navLinksStyle: {
    flex: 1,
    margin: '1rem 0',
  },
  loginButtonStyle: {
    textAlign: 'center',
  },
};

// Apply responsive styles using media queries
Object.keys(responsiveStyles).forEach((key) => {
  const style = responsiveStyles[key];
  const mediaQuery = `@media (max-width: 768px) { ${key} { ${Object.entries(
    style
  )
    .map(([property, value]) => `${property}: ${value};`)
    .join(' ')} } }`;
  const styleTag = document.createElement('style');
  styleTag.type = 'text/css';
  styleTag.appendChild(document.createTextNode(mediaQuery));
  document.head.appendChild(styleTag);
});

export default Header;
