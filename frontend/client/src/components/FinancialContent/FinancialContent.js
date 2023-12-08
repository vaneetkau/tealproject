import React, { useEffect, useState } from "react";
import "../News/News"

const FinancialContent = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      "https://newsapi.org/v2/everything?q=financial&apiKey=6f533d796d3b4c98b9744636e95103eb"
    );
    let data = await resonse.json();
    setMyNews(data.articles.slice(0, 6));
    //setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
    <h1 className="text-Left my-3">Financial Content</h1>
          <div className="mainDiv">
      {mynews.map((ele) => {
        console.log(ele)
        return (
          <>
        <div className="card" style={{  marginTop:"1.5rem" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <img src={ele.urlToImage == null ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{ele.author == "" ? "Financial Advice" : ele.author}</h5>
                <p className="card-text">
                 {ele.title}
                </p>
                <a href={ele.url} target="_blank" className="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </>
        );
    })}
    </div>
    </>
  );
};

export default FinancialContent;