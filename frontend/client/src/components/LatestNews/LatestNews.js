import React, { useEffect, useState } from "react";
import "../News/News.css";
import Sidebar from "../Sidebar/Sidebar";

const LatestNews = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch("https://gnews.io/api/v4/search?top-headlines?category=general&q=general&country=ca&token=ccbe5010bf66d33420ee1330c970621b");
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
        <div className="col-lg-2 col-md-3" style={{ paddingLeft: 0 }}>
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9">
          <>
            <h1 className="text-left my-3">Latest News</h1>
            <div className="mainDiv">
              {mynews.map((ele) => {
                console.log(ele);
                return (
                  <>
                    <div
                      className="card"
                      style={{
                        marginTop: "2rem",
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      }}>
                      <img
                        src={ele.image == null ? "https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*" : ele.image}
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="card-body">
                        <h5 className="card-title">{ele.title ? `${ele.description.slice(0, 30)}...` : "No Ttle available"}</h5>
                        <p className="card-text">{ele.description ? `${ele.description.slice(0, 50)}...` : "No description available"}</p>
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
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
