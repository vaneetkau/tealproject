import React from 'react';

const NotFound = () => {
  const styles = `
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100vh;
      background-color: white;
    }

    .heading {
      font-size: 2rem;
      margin-bottom: 1rem;
    }

    .paragraph {
      font-size: 1.2rem;
      text-align: center;
    }
  `;

  return (
    <div>
      <style>{styles}</style>
      <div className="container">
        <h1 className="heading">404 - Page Not Found</h1>
        <p className="paragraph">Sorry, the page you are looking for does not exist or your internet connection is down.</p>
      </div>
    </div>
  );
};

export default NotFound;
