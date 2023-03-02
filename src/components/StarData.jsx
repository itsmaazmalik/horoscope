import React from "react";
import { content } from "../Content";
import Back from "./Back";

const StarData = ({ starDetail }) => {
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
              src={star.name === starDetail.name ? star.icon : ""}
              alt=""
            />
          );
        })}
        <h1 className="mt-2">{starDetail.name}</h1>
        <div className="text-start">
          <div className="card mt-3">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Basic Details</h5>
              <p className="card-text">
                <strong>Date Range : </strong>
                {starDetail.date_range}
              </p>
              <p className="card-text">
                <strong>Compatibility : </strong>
                {starDetail.compatibility}
              </p>
              <p className="card-text">
                <strong>Name : </strong>
                {starDetail.name}
              </p>
              <p className="card-text">
                <strong>Symbol : </strong>
                {starDetail.symbol}
              </p>
              <p className="card-text">
                <strong>Element : </strong>
                {starDetail.element}
              </p>
              <p className="card-text">
                <strong>Ruling Planet : </strong>
                {starDetail.ruling_planet}
              </p>
            </div>
          </div>
        </div>
        {/* Details */}
        <div className="text-start">
          <div className="card mt-3">
            {/* <img src="..." className="card-img-top" alt="..." /> */}
            <div className="card-body">
              <h5 className="card-title">Complete Details</h5>
              <p className="card-text">
                <strong>About : </strong>
                {starDetail.about}
              </p>
              <p className="card-text">
                <strong>Career : </strong>
                {starDetail.career}
              </p>
              <p className="card-text">
                <strong>Health : </strong>
                {starDetail.health}
              </p>
              <p className="card-text">
                <strong>Love : </strong>
                {starDetail.love}
              </p>
              <p className="card-text">
                <strong>Nature : </strong>
                {starDetail.nature}
              </p>
              <p className="card-text">
                <strong>Relationship : </strong>
                {starDetail.relationship}
              </p>
              <p className="card-text">
                <strong>Strengths : </strong>
                {starDetail.strengths}
              </p>
              <p className="card-text">
                <strong>Weaknesses : </strong>
                {starDetail.weaknesses}
              </p>
              <p className="card-text">
                <strong>Man : </strong>
                {starDetail.man}
              </p>
              <p className="card-text">
                <strong>Woman : </strong>
                {starDetail.woman}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StarData;
