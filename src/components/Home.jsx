import React from "react";
import { Link } from "react-router-dom";
import { content } from "../Content";

const Home = ({ handleHoroscope, horoscopeDetail }) => {
  const { stars } = content;

  return (
    <div className="row mt-5">
      {stars.map((star, i) => {
        return (
          <div key={i} className="col col-lg-3">
            <div className="card mx-auto my-3" style={{ width: "17rem" }}>
              <Link
                to={`/star/${star.name.toLowerCase()}`}
                onClick={() => {
                  // alert(star.name.toLowerCase());
                  handleHoroscope(star.name.toLowerCase());
                }}
              >
                <img src={star.icon} className="card-img-top" alt="..." />
              </Link>
              <div className="card-body">
                <h5 className="card-title">{star.name}</h5>
                <p className="card-text">
                  {star.start_date} - {star.end_date}
                </p>
                <Link
                  to={`/star/${star.name.toLowerCase()}`}
                  onClick={() => {
                    // alert(star.name.toLowerCase());
                    handleHoroscope(star.name.toLowerCase());
                  }}
                  className="btn btn-primary mx-2"
                >
                  Horoscope
                </Link>
                <Link
                  to={`/detail/${star.name.toLowerCase()}`}
                  onClick={() => {
                    // alert(star.name.toLowerCase());
                    horoscopeDetail(star.name.toLowerCase());
                  }}
                  className="btn btn-primary mx-2"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
