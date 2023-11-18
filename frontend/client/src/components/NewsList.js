import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar/Sidebar';

function NewsList({ newsType }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Define the API endpoint based on the newsType
    const apiEndpoint = `http://localhost:4000/api/${newsType}/list`;

    axios
      .get(apiEndpoint)
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
      });
  }, [newsType]);

  return (
    <div className="App">
      <div className="sidebar-div">
        <Sidebar />
      </div>{' '}
      <div>
        <h2>List of {newsType} News</h2>
        <ul>
          {news.map((article) => (
            <li key={article._id}>
              <h3>{article.title}</h3>
              <img src={article.image} alt={article.title} />
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default NewsList;
