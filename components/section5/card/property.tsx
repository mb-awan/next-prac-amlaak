/* eslint-disable @next/next/no-img-element */
import classes from "./property.module.scss";

import React from "react";

interface propertyProps {
  imgPath: string;
  areaName: string;
  totalProperties: number;
}
const PropertyCard = ({
  imgPath,
  areaName,
  totalProperties,
}: propertyProps) => {
  return (
    <div className={classes.property_card}>
      <div className={classes.card_image}>
        <img src={imgPath} alt={areaName} />
      </div>
      <div className={classes.card_body}>
        <h3 className={classes.area_name}>{areaName}</h3>
        <p className={classes.total_properties}>{totalProperties} Properties</p>
      </div>
    </div>
  );
};

export default PropertyCard;
