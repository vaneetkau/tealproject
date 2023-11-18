// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
// import './HeaderSection.css'

const Header = () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Logo</div>
      <div style={navLinksStyle}>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/about" style={linkStyle}>
          About
        </Link>
        <Link to="/Contact" style={linkStyle}>
          Contact
        </Link>
        <Link to="/FaqPage" style={linkStyle}>
          FAQ
        </Link>
        <Link to="/TandCPage" style={linkStyle}>
          T&C
        </Link>
      </div>
      <div style={loginButtonStyle}>
        {' '}
        <Link to="/LoginFromLandingPage" className="btn btn-lg btn-primary rounded-pill">
          {' '}
          Login{' '}
        </Link>
      </div>
    </header>
  );
};

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#F4F4F4',
};

const logoStyle = {
  flex: 1,
};

const navLinksStyle = {
  flex: 2,
  display: 'flex',
  justifyContent: 'center',
  color: '#000000',
};

const linkStyle = {
  marginRight: '1rem',
  textDecoration: 'none',
  color: '#000',
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
