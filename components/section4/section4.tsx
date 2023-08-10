/* eslint-disable @next/next/no-img-element */
"use client";
import ProductCard from "./card/product";
import classes from "./section4.module.scss";
import Slider from "react-slick";

import React from "react";

const PrevArrow = (props: any) => {
  return (
    <button
      className={`${classes.customArrow} ${classes.prevArrow}`}
      onClick={props.onClick}
    >
      <img src="/assets/images/round-prev-arrow.svg" alt="prev" />
    </button>
  );
};

const NextArrow = (props: any) => {
  return (
    <button
      className={`${classes.customArrow} ${classes.nextArrow}`}
      onClick={props.onClick}
    >
      <img src="/assets/images/round-next-arrow.svg" alt="next" />
    </button>
  );
};

const Section4 = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  return (
    <div className={classes.section4}>
      <div className={classes.header}>
        <div className={classes.heading_and_para}>
          <h1 className={classes.heading}>Feature Product</h1>
          <p className={classes.para}>
            Some of our picked properties near you location.
          </p>
        </div>
        <div className={classes.browse_btn}>
          <button type="button">Browse more properties</button>
        </div>
      </div>

      <div className={classes.slider_container}>
        <Slider {...settings}>
          <ProductCard
            imgPath="/assets/images/palm-harbor.png"
            price="PKR  7.6 Cr "
            duration="Sell"
            areaName="Palm Harbor"
            address="68 Aourangzaib Block  Garden Town"
            total={{
              bedroom: 3,
              bath: 2,
              size: "5x7 m²",
            }}
            popular={true}
            showHeart={true}
          />
          <ProductCard
            imgPath="/assets/images/beverly-spring-field.png"
            price="PKR  1.6  Lakh"
            duration="month"
            areaName="Beverly Springfield"
            address="68 Aourangzaib Block  Garden Town"
            total={{
              bedroom: 4,
              bath: 2,
              size: "6x7.5 m²",
            }}
            popular={true}
            showHeart={true}
          />
          <ProductCard
            imgPath="/assets/images/palm-harbor.png"
            price="PKR  1.6  Lakh"
            duration="month"
            areaName="Faulkner Ave"
            address="68 Aourangzaib Block  Garden Town"
            total={{
              bedroom: 4,
              bath: 3,
              size: "8x10 m²",
            }}
            popular={true}
            showHeart={true}
          />
          <ProductCard
            imgPath="/assets/images/palm-harbor.png"
            price="PKR  7.6 Cr "
            duration="Sell"
            areaName="Palm Harbor"
            address="68 Aourangzaib Block  Garden Town"
            total={{
              bedroom: 3,
              bath: 2,
              size: "5x7 m²",
            }}
            popular={true}
            showHeart={true}
          />

          <ProductCard
            imgPath="/assets/images/beverly-spring-field.png"
            price="PKR  1.6  Lakh"
            duration="month"
            areaName="Beverly Springfield"
            address="68 Aourangzaib Block  Garden Town"
            total={{
              bedroom: 4,
              bath: 2,
              size: "6x7.5 m²",
            }}
            popular={true}
            showHeart={true}
          />
          <ProductCard
            imgPath="/assets/images/palm-harbor.png"
            price="PKR  1.6  Lakh"
            duration="month"
            areaName="Faulkner Ave"
            address="68 Aourangzaib Block  Garden Town"
            total={{
              bedroom: 4,
              bath: 3,
              size: "8x10 m²",
            }}
            popular={true}
            showHeart={true}
          />
        </Slider>
      </div>
    </div>
  );
};

export default Section4;
