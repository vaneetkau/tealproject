// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed-bottom" style={footerStyle}>
      Copyright © 2023 Loanease | All Rights Reserved
    </footer>
  );
};

// const footerStyle = {
//   textAlign: "center",
//   padding: "1rem",
//   color: "#fff",
// };

const footerStyle = {
  textAlign: "center",
  padding: "1rem",
  color: "#fff",
  fontSize: "1rem",

  "@media (min-width: 768px)": {
    fontSize: "1.2rem",
  },
  "@media (min-width: 992px)": {
    fontSize: "1.5rem",
  },
  "@media (min-width: 1200px)": {
    fontSize: "1.8rem",
  },
};

export default Footer;
