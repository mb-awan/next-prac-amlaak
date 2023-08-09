/* eslint-disable @next/next/no-img-element */
import classes from "./product.module.scss";

import React from "react";

interface propertyProps {
  imgPath: string;
  areaName: string;
  totalProperties: number;
}
const ProductCard = ({ imgPath, areaName, totalProperties }: propertyProps) => {
  return (
    <div className={classes.product_card}>
      <div className={classes.card_image}>
        <img src={imgPath} alt={areaName} />
      </div>
      <div className={classes.card_body}>
        <div className={classes.price_and_heart}>
          <h2 className={classes.price}>
            PKR 7.6 Cr <span>/ Sell</span>
          </h2>
          <div className={classes.heart_container}>
            <img src="/assets/images/heart.svg" alt="heart" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
