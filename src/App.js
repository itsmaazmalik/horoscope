import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getDailyHoroscope, getHoroscopeDetail } from "./utils/api";
import { useState } from "react";
import Spinner from "./components/Spinner";
import HoroscopeDetail from "./components/HoroscopDetail";
import StarData from "./components/StarData";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [horoscopeData, setHoroscopeData] = useState([]);
  const [starDetail, setStarDetail] = useState([]);
  const [currStar, setCurrStar] = useState("");

  const handleHoroscope = async (starName) => {
    setLoading(true);
    setHoroscopeData([]);
    setCurrStar("");
    try {
      const data = await getDailyHoroscope(starName);
      setHoroscopeData(data);
      setCurrStar(starName);
      setLoading(false);
      // console.log(starDetail);
    } catch (error) {
      console.error(error);
    }
  };

  const horoscopeDetail = async (starName) => {
    setLoading(true);
    setStarDetail([]);
    setCurrStar("");
    try {
      const data = await getHoroscopeDetail(starName);
      setStarDetail(data);
      setCurrStar(starName);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App ">
      <Router basename="/horoscope">
        <Navbar
          handleHoroscope={handleHoroscope}
          horoscopeDetail={horoscopeDetail}
        />
        {loading && <Spinner />}
        <div className="container">
          <Routes>
            <Route
              exact
              index
              path="/"
              element={
                <Home
                  handleHoroscope={handleHoroscope}
                  horoscopeDetail={horoscopeDetail}
                />
              }
            />
            <Route
              exact
              path={`/star/:starName`}
              element={
                !loading && (
                  <HoroscopeDetail
                    currStar={currStar}
                    horoscopeData={horoscopeData}
                  />
                )
              }
            />
            <Route
              exact
              path={`/detail/:starName`}
              element={
                !loading && (
                  <StarData currStar={currStar} starDetail={starDetail} />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
