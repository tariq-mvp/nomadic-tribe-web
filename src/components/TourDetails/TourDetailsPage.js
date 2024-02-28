import React from "react";
import TourDetailsOne from "./TourDetailsOne";
import TourDetailsTwo from "./TourDetailsTwo";

const TourDetailsPage = ({data}) => {
  console.log("data", data);
  return (
    <>
      <TourDetailsOne data={data}/>
      <TourDetailsTwo data={data}/>
    </>
  );
};

export default TourDetailsPage;
