/* eslint-disable @next/next/no-img-element */
import PropertyCard from "./card/property";
import classes from "./section5.module.scss";

import React from "react";

const Section5 = () => {
  return (
    <div className={classes.section5}>
      <h1 className={classes.heading}>Find Properties in These Cities</h1>
      <p className={classes.para}>
        Some of our picked properties near you location.
      </p>

      <div className={classes.property_cards_container}>
        <PropertyCard
          imgPath="/assets/images/gullberg-3.png"
          areaName="Gullberg III"
          totalProperties={90}
        />
        <PropertyCard
          imgPath="/assets/images/joher-town.png"
          areaName="Joher Town"
          totalProperties={105}
        />
        <PropertyCard
          imgPath="/assets/images/model-town.png"
          areaName="Model Town"
          totalProperties={90}
        />
        <PropertyCard
          imgPath="/assets/images/garden-town.png"
          areaName="Garden Town"
          totalProperties={90}
        />
        <PropertyCard
          imgPath="/assets/images/dha.png"
          areaName="DHA"
          totalProperties={105}
        />
        <PropertyCard
          imgPath="/assets/images/iqbal-town.png"
          areaName="Iqbal Town"
          totalProperties={90}
        />
        <PropertyCard
          imgPath="/assets/images/behria-town.png"
          areaName="Behria Town"
          totalProperties={90}
        />
        <PropertyCard
          imgPath="/assets/images/samnabad.png"
          areaName="Samnabad"
          totalProperties={105}
        />
        <PropertyCard
          imgPath="/assets/images/velencia.png"
          areaName="Velencia Town"
          totalProperties={90}
        />
      </div>
    </div>
  );
};

export default Section5;
