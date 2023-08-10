/* eslint-disable @next/next/no-img-element */
import classes from "./section3.module.scss";

import React from "react";

const Section3 = () => {
  return (
    <div className={classes.section3}>
      <div className={classes.main_container}>
        <h2 className={classes.heading}>How to Bid Properties?</h2>
        <div className={classes.informative_image_container}>
          <img src="/assets/images/Inforaphic-desktop.png" alt="inforaphic" />
        </div>
      </div>
    </div>
  );
};

export default Section3;
