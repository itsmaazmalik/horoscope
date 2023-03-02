import React from "react";
import { content } from "../Content";
import Back from "./Back";

const HoroscopeDetail = ({ horoscopeData, currStar }) => {
  const { stars } = content;
  return (
    <>
      <Back />
      <div className="container">
        {stars.map((star) => {
          return (
            <img
              key={star.name}
              className="mt-4"
              style={{ width: "200px", borderRadius: "50%" }}
              src={
                star.name.toUpperCase() === currStar.toUpperCase()
                  ? star.icon
                  : ""
              }
              alt=""
            />
          );
        })}
        <div className="card mt-3">
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{currStar.toUpperCase()} - Horoscope</h5>
            <p className="card-text">{horoscopeData.horoscope}</p>
          </div>
          <ul className="list-group list-group-flush text-start">
            <li className="list-group-item">
              <strong>Color : </strong>
              {horoscopeData.color}
            </li>
            <li className="list-group-item">
              <strong>Lucky Number : </strong>
              {horoscopeData.lucky_number}
            </li>
            <li className="list-group-item">
              <strong>Mood : </strong>
              {horoscopeData.mood}
            </li>
            <li className="list-group-item">
              <strong>Lucky Time : </strong>
              {horoscopeData.lucky_time}
            </li>
            <li className="list-group-item">
              <strong>Sunsign : </strong>
              {horoscopeData.sunsign}
            </li>
          </ul>
        </div>
        <div className="card mt-3">
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{horoscopeData.areas[0].title}</h5>
            <p className="card-text">{horoscopeData.areas[0].desc}</p>
          </div>
        </div>
        <div className="card mt-3">
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{horoscopeData.areas[1].title}</h5>
            <p className="card-text">{horoscopeData.areas[1].desc}</p>
          </div>
        </div>
        <div className="card mt-3">
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{horoscopeData.areas[2].title}</h5>
            <p className="card-text">{horoscopeData.areas[2].desc}</p>
          </div>
        </div>
        <div className="card mt-3">
          {/* <img src="..." className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <h5 className="card-title">{horoscopeData.areas[3].title}</h5>
            <p className="card-text">{horoscopeData.areas[3].desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoroscopeDetail;
