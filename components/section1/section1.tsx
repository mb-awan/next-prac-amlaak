/* eslint-disable @next/next/no-img-element */
import classes from "./section1.module.scss";

import React from "react";

const Section1 = () => {
  return (
    <div className={classes.section_1}>
      <div className={classes.left_container}>
        <h1 className={classes.main_heading}>
          Buy, rent, or sell your property easily
        </h1>

        <p className={classes.main_para}>
          A great platform to buy, sell, or even rent your properties without
          any commisions.
        </p>

        <div className={classes.main_stats}>
          <div className={classes.col}>
            <div className={classes.number}>50k+</div>
            <div className={classes.text}>renters</div>
          </div>
          <div className={classes.col}>
            <div className={classes.number}>10k+</div>
            <div className={classes.text}>properties</div>
          </div>
        </div>

        <div className={classes.search}>
          <div className={classes.search_head}>
            <div
              className={`${classes.search_category} ${classes.active_category}`}
            >
              Rent
            </div>
            <div className={classes.search_category}>Buy</div>
            <div className={classes.search_category}>Sell</div>
          </div>
          <div className={classes.search_body}>
            <div className={classes.location}>
              <div className={classes.city_heading}>City</div>
              <div className={classes.city_name}>Lahore, Punjab</div>
            </div>
            <div className={classes.location_input}>
              <div className={classes.input}>
                <img src="/assets/images/location.svg" alt="location" />
                <input
                  type="text"
                  name="location"
                  placeholder="Enter Location (e.g ‘ Model Town’)"
                />
              </div>
              <ul className={classes.suggestions}>
                <li>Garden Town</li>
              </ul>
            </div>
            <div className={classes.buttons}>
              <button type="button" className={classes.filter_btn}>
                <img src="/assets/images/filter.svg" alt="" />
              </button>
              <button type="button" className={classes.search_btn}>
                <img src="/assets/images/search-icon.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.right_container}>2 cards</div>
    </div>
  );
};

export default Section1;
