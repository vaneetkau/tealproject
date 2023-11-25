import React, { useEffect, useState } from "react";
import "../News/News"
import Sidebar from "../Sidebar/Sidebar";

const LoanAdvice = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      "https://newsapi.org/v2/everything?q=loan&apiKey=6f533d796d3b4c98b9744636e95103eb"
    );
    let data = await resonse.json();
    setMyNews(data.articles.slice(0, 6));
    //setMyNews(data.articles);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
        <div className="container-fluid">
      <div className="row">
        <div className="col-lg-2 col-md-3" style={{paddingLeft: 0 }}>
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9">
    <>
    <h1 className="text-left my-3">Loan Advice</h1>
          <div className="mainDiv">
      {mynews.map((ele) => {
        console.log(ele)
        return (
          <>
        <div class="card" style={{  marginTop:"2rem" , boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
              <img src={ele.urlToImage == null ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.urlToImage} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">{ele.author == "" ? "Loan Advice" : ele.author}</h5>
                <p class="card-text">
                 {ele.title}
                </p>
                <a href={ele.url} target="_blank" class="btn btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </>
        );
    })}
    </div>
    </>
    </div>
    </div>
    </div>
  );
};

export default LoanAdvice;







