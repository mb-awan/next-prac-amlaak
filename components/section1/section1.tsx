/* eslint-disable @next/next/no-img-element */
"use client";
import ProductCard from "../section4/card/product";
import classes from "./section1.module.scss";

import React, { useReducer } from "react";

type SearchCategory = "rent" | "buy" | "sell";

interface Section1State {
  selectedSearchCategory: SearchCategory;
}

type Section1Action = { type: "SET_CATEGORY"; payload: SearchCategory };

const initialState: Section1State = {
  selectedSearchCategory: "rent",
};

const section1Reducer = (
  state: Section1State,
  action: Section1Action
): Section1State => {
  switch (action.type) {
    case "SET_CATEGORY":
      return { ...state, selectedSearchCategory: action.payload };
    default:
      return state;
  }
};

const Section1 = () => {
  const [state, dispatch] = useReducer(section1Reducer, initialState);

  const handleCategoryClick = (category: SearchCategory) => {
    dispatch({ type: "SET_CATEGORY", payload: category });
  };

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
              className={`${classes.search_category} ${
                state.selectedSearchCategory === "rent"
                  ? classes.active_category
                  : ""
              }`}
              onClick={() => handleCategoryClick("rent")}
            >
              Rent
            </div>
            <div
              className={`${classes.search_category} ${
                state.selectedSearchCategory === "buy"
                  ? classes.active_category
                  : ""
              }`}
              onClick={() => handleCategoryClick("buy")}
            >
              Buy
            </div>
            <div
              className={`${classes.search_category} ${
                state.selectedSearchCategory === "sell"
                  ? classes.active_category
                  : ""
              }`}
              onClick={() => handleCategoryClick("sell")}
            >
              Sell
            </div>
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
      <div className={classes.right_container}>
        <div className={classes.card1}>
          <ProductCard
            className={classes.card1_additions}
            imgPath="/assets/images/beverly-spring-field.png"
            price="PKR  7.6 Cr "
            duration="Sell"
            areaName="Beverly Springfield"
            address="68 Aourangzaib Block  Garden Town"
            total={{
              bedroom: 4,
              bath: 2,
              size: "6x7.5 m²",
            }}
          />
        </div>

        <div className={classes.card2}>
          <ProductCard
            className={classes.card2_additions}
            imgPath="/assets/images/tarpon-bay.png"
            price="PKR  7.6 Cr "
            duration="Sell"
            areaName="Tarpon Bay"
            address="68 Aourangzaib Block  Garden Town"
            total={{
              bedroom: 4,
              bath: 2,
              size: "6x7.5 m²",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Section1;
