import React, { useEffect, useState } from 'react';
import './News.css';
import Sidebar from '../Sidebar/Sidebar';
import newsImage from './newsImage.png';
const LatestNews = () => {
  const [mynews, setMyNews] = useState([]);

  const fetchData = async () => {
    let resonse = await fetch(
      'https://gnews.io/api/v4/search?top-headlines?category=general&q=general&token=235bc2d596033d0cef9a8952b244d51c'
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
        <div className="col-lg-2 col-md-3" style={{ paddingLeft: 0 }}>
          <Sidebar />
        </div>
        <div className="col-lg-10 col-md-9">
          <>
            <div className="divcss">
              <table className="tablecss">
                <tr>
                  <td className="tdcss">
                    <tr>
                      <h3 className=" text-Left">
                        Apply For Loans and Scholarships
                      </h3>
                    </tr>
                    <tr>
                      <button className="yellowButton">Our Services</button>
                    </tr>
                  </td>

                  <td className="tdcss paddingleft">
                    <img src={newsImage} alt="newsImage" />
                  </td>
                </tr>
              </table>
            </div>

            <h1 className="text-left my-3 heading1">Latest News</h1>

            <div className="mainDiv">
              {mynews.map((ele) => {
                console.log(ele);
                return (
                  <>
                    <div
                      className="card"
                      style={{
                        marginTop: '2rem',
                        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                      }}
                    >
                      <img
                        src={
                          ele.image == null
                            ? 'https://kubrick.htvapps.com/vidthumb/f6865cb1-d77d-4a31-ba83-d57c4b2324d8/4b9c9d8f-ad14-47ea-bcf4-bf24ee0bb1f3.jpg?crop=0.383xw:0.383xh;0.517xw,0.252xh&resize=1200:*'
                            : ele.image
                        }
                        className="card-img-top"
                        alt="..."
                      />
                      <figcaption>
                        <div className="card-body">
                          <h5 className="card-title">
                            {ele.title
                              ? `${ele.description.slice(0, 20)}...`
                              : 'No Ttle available'}
                          </h5>
                          <p className="card-text">
                            {ele.description
                              ? `${ele.description.slice(0, 40)}...`
                              : 'No description available'}
                          </p>
                          <p className=" card-text">
                            <a
                              href={ele.url}
                              target="_blank"
                              className=" card-a"
                            >
Learn more                            </a>
                          </p>
                        </div>
                      </figcaption>
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
