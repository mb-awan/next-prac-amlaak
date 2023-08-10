/* eslint-disable @next/next/no-img-element */
import classes from "./product.module.scss";

import React from "react";

interface propertyProps {
  imgPath: string;
  price: string;
  duration: string;
  areaName: string;
  address: string;
  total: {
    bedroom: number;
    bath: number;
    size: string;
  };
  popular?: boolean;
  showHeart?: boolean;

  className?: string;
}

const ProductCard = ({
  imgPath,
  price,
  duration,
  areaName,
  address,
  total,
  popular = false,
  showHeart = false,
  className = "",
}: propertyProps) => {
  return (
    <div className={`${classes.product_card} ${className}`}>
      <div className={classes.card_image}>
        <img src={imgPath} alt={areaName} />
        {popular && (
          <img
            className={classes.popular_img}
            src="/assets/images/popular-badge.png"
            alt="popular"
          />
        )}
      </div>
      <div className={classes.card_body}>
        <div className={classes.price_and_heart}>
          <h2 className={classes.price}>
            {price} <span> / {duration}</span>
          </h2>
          {showHeart && (
            <div className={classes.heart_container}>
              <img src="/assets/images/heart.svg" alt="heart" />
            </div>
          )}
        </div>

        <h3 className={classes.product_name}>{areaName}</h3>
        <p className={classes.product_address}>{address}</p>
        <div className={classes.product_details}>
          <div className={classes.detail_container}>
            <img src="/assets/images/bed.svg" alt="bed" />
            <span>{total.bedroom} Beds</span>
          </div>
          <div className={classes.detail_container}>
            <img src="/assets/images/bath.svg" alt="bath" />
            <span>{total.bath} Bathrooms</span>
          </div>
          <div className={classes.detail_container}>
            <img src="/assets/images/square-meter.svg" alt="square-meter" />
            <span>{total.size}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
