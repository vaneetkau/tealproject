// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../UserAuthentication/Login';
// import './HeaderSection.css'
import LogoImg from './logo.png'

const Header = () => {
  return (
    <header style={headerStyle}>
<div style={logoStyle}>
  <img src={LogoImg} alt="Logo" /> {/* Use LogoImg variable */}
</div>
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
        <Link to="/Login" className="btn btn-lg btn-primary rounded-pill">
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
  transition: 'color 0.3s ease', // Adding a smooth color transition
  // Hover effect
  ':hover': {
    color: '#FF0000', // Change the color on hover
    textDecoration: 'underline', // Underline on hover (optional)
  },
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
