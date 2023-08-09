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
      <img src="/assets/images/prev-arrow.svg" alt="prev" />
    </button>
  );
};

const NextArrow = (props: any) => {
  return (
    <button
      className={`${classes.customArrow} ${classes.nextArrow}`}
      onClick={props.onClick}
    >
      <img src="/assets/images/next-arrow.svg" alt="next" />
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
          <div>
            <ProductCard
              imgPath="/assets/images/palm-harbor.png"
              areaName="Gullberg III"
              totalProperties={90}
            />
          </div>
          <div>
            <ProductCard
              imgPath="/assets/images/beverly-spring-field.png"
              areaName="Gullberg III"
              totalProperties={90}
            />
          </div>
          <div>
            <ProductCard
              imgPath="/assets/images/faulkner-ave.png"
              areaName="Gullberg III"
              totalProperties={90}
            />
          </div>
          <div>
            <ProductCard
              imgPath="/assets/images/gullberg-3.png"
              areaName="Gullberg III"
              totalProperties={90}
            />
          </div>
          <div>
            <ProductCard
              imgPath="/assets/images/gullberg-3.png"
              areaName="Gullberg III"
              totalProperties={90}
            />
          </div>
          <div>
            <ProductCard
              imgPath="/assets/images/gullberg-3.png"
              areaName="Gullberg III"
              totalProperties={90}
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Section4;
