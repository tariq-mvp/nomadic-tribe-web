import React from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation } from "swiper";
import { Swiper } from "swiper/react";
import SingleSlide from "./SingleSlide";

SwiperCore.use([Autoplay, Navigation, EffectFade]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};
const mainSliderData = [
  {
    id: 1,
    bg: "https://nomadic-tribe-v2-bucket.s3.eu-west-1.amazonaws.com/banner/2022-12-28-6241c03998f50e3e908f077a-eeecmg-large.60ab6f6127d378.26091467.jpg",
    subTitle: "Where Would You Like To Go?",
    title: "Travel & Adventures",
  },
  {
    id: 2,
    bg: "https://d2neuv05ura4o9.cloudfront.net/tribes/56/large.5e949fa9502542.20280271.jpg",
    subTitle: "Where Would You Like To Go?",
    title: "Travel & Adventures",
  },
  {
    id: 3,
    bg: "https://d2neuv05ura4o9.cloudfront.net/tribes/73/large.5efa2106778b61.65453584.jpg",
    subTitle: "Where Would You Like To Go?",
    title: "Travel & Adventures",
  },
  {
    id: 4,
    bg: "https://d2neuv05ura4o9.cloudfront.net/tribes/26/large.5e933f7533b7c9.28807982.jpg",
    subTitle: "Where Would You Like To Go?",
    title: "Travel & Adventures",
  },
];
const MainSlider = ({data}) => {
  return (
    <section className="main-slider">
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {data?.banners?.map((item, i) => (
            <SingleSlide key={i} slide={item} />
          ))}
        </div>
        <div className="main-slider-nav">
          <div
            id="main-slider__swiper-button-prev"
            className="main-slider-button-prev"
          >
            <span className="icon-right-arrow"></span>
          </div>
          <div
            id="main-slider__swiper-button-next"
            className="main-slider-button-next"
          >
            <span className="icon-right-arrow"></span>{" "}
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
