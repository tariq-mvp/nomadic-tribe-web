import AboutOne from "@/components/AboutOne/AboutOne";
import BrandOne from "@/components/BrandOne/BrandOne";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import ChallengeLevel from "@/components/ChallengeLevel/ChallengeLevel";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import PopularTours from "@/components/PopularTours/PopularTours";
import Climb from "@/components/Climb/Climb";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import TourSearch from "@/components/TourSearch/TourSearch";
import VideoOne from "@/components/VideoOne/VideoOne";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import React, { useEffect, useState } from "react";
import { fetchExplorePageData, fetchHomeData } from "src/api";

const Home = () => {
  const [data, setData] = useState([]);
  const [climbData, setClimbData] = useState([]);
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const result = await fetchHomeData();
      const climbResult = await fetchExplorePageData();
      setData(result?.data);
      setClimbData(climbResult?.data);
    } catch(err) {
      console.log("error", err);
    }
  }
  
  return ( 
    <Layout pageTitle="Nomadic Tribe">
      <MainSlider data={data}/>
      {/* <TourSearch /> */}
      <DestinationsOne data={data}/>
      <AboutOne />
      <ChallengeLevel data={data}/>
      <PopularTours data={data}/>
      <Climb data={climbData}/>
      <VideoOne />
      <BrandOne />
      <TestimonialOne data={data}/>
      <GalleryOne />
      <WhyChoose />
      <NewsOne />
    </Layout>
  );
};

export default Home;
