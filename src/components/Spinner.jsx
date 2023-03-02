import React from "react";
import { Circles } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div
      className="container d-flex justify-content-center"
      style={{ marginTop: "25%" }}
    >
      <Circles
        height="80"
        width="80"
        color="#1B3D8C"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Spinner;
