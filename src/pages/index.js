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
import { fetchHomeData } from "src/api";

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    try {
      const result = await fetchHomeData();
      setData(result?.data);
      console.log("result", result?.data)
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
      <PopularTours data={data}/>
      <ChallengeLevel data={data}/>
      <Climb />
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
