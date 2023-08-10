/* eslint-disable @next/next/no-img-element */
"use client";

import Slider from "react-slick";
import classes from "./section2.module.scss";

import React, { useReducer, useState } from "react";

type PropertyCategories = "homes" | "plots" | "commercials";
type PropertySubCategories = "popular" | "type" | "area size";

type State = {
  selectedPropertyCategory: PropertyCategories;
  selectedPropertySubCategory: PropertySubCategories;
};

type Action =
  | { type: "SET_PROPERTY_CATEGORY"; category: PropertyCategories }
  | { type: "SET_PROPERTY_SUB_CATEGORY"; subCategory: PropertySubCategories };

const initialState: State = {
  selectedPropertyCategory: "homes",
  selectedPropertySubCategory: "popular",
};

const sectionReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PROPERTY_CATEGORY":
      return {
        ...state,
        selectedPropertyCategory: action.category,
      };
    case "SET_PROPERTY_SUB_CATEGORY":
      return {
        ...state,
        selectedPropertySubCategory: action.subCategory,
      };
    default:
      return state;
  }
};

const Section2 = () => {
  const [state, dispatch] = useReducer(sectionReducer, initialState);

  const handlePropertyCategoryChange = (category: PropertyCategories) => {
    dispatch({ type: "SET_PROPERTY_CATEGORY", category });
  };

  const propertySliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    appendDots: (dots: any) => (
      <div className="custom-dots-container">
        <ul>{dots}</ul>
      </div>
    ),
    prevArrow: <img src="/path/to/your/square-prev-arrow.svg" alt="prev" />,
    nextArrow: <img src="/path/to/your/square-next-arrow.svg" alt="next" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handlePropertySubCategoryChange = (
    subCategory: PropertySubCategories
  ) => {
    dispatch({ type: "SET_PROPERTY_SUB_CATEGORY", subCategory });
  };

  return (
    <div className={classes.section2}>
      <div className={classes.leftContainer}>
        {state.selectedPropertyCategory === "homes" ? (
          <img src="/assets/images/home-properties.png" alt="home-properties" />
        ) : state.selectedPropertyCategory === "plots" ? (
          <img src="/assets/images/plot-properties.png" alt="plots" />
        ) : state.selectedPropertyCategory === "commercials" ? (
          <img
            src="/assets/images/commercial-properties.png"
            alt="commercials"
          />
        ) : null}
      </div>
      <div className={classes.right_container}>
        <nav className={classes.property_category_navbar}>
          <li
            style={{
              borderBottom: `${
                state.selectedPropertyCategory === "homes"
                  ? "4px solid #DC044D"
                  : "none"
              }`,
            }}
            onClick={() => handlePropertyCategoryChange("homes")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="25"
              viewBox="0 0 29 25"
              fill="none"
            >
              <path
                d="M28.1113 11.2905L23.7781 7.22423V2.52695C23.7781 1.67762 23.0447 0.989303 22.1383 0.989303C21.234 0.989303 20.5006 1.67762 20.5006 2.52695V4.14855L17.2742 1.12075C15.6791 -0.37536 12.9056 -0.372706 11.3141 1.12346L0.479686 11.2905C-0.159895 11.8919 -0.159895 12.865 0.479686 13.4655C1.11956 14.0667 2.15852 14.0667 2.79815 13.4655L13.6316 3.29813C13.9845 2.96868 14.6065 2.96868 14.9576 3.29716L25.7928 13.4655C25.9449 13.6084 26.1256 13.7217 26.3245 13.799C26.5234 13.8762 26.7365 13.9159 26.9518 13.9157C27.3714 13.9157 27.791 13.766 28.1113 13.4655C28.7511 12.8651 28.7511 11.892 28.1113 11.2905Z"
                fill={
                  state.selectedPropertyCategory === "homes"
                    ? "#DC044D"
                    : "#727885"
                }
              />
              <path
                d="M14.8645 6.22142C14.5497 5.92619 14.0401 5.92619 13.7262 6.22142L4.19621 15.1619C4.0452 15.3039 3.96041 15.4963 3.96045 15.6969V22.2178C3.96045 23.7479 5.28255 24.9886 6.91307 24.9886H11.6314V18.1314H16.9583V24.9886H21.6767C23.3071 24.9886 24.6292 23.7479 24.6292 22.2178V15.6969C24.6292 15.4958 24.5447 15.3031 24.3935 15.1619L14.8645 6.22142Z"
                fill={
                  state.selectedPropertyCategory === "homes"
                    ? "#DC044D"
                    : "#727885"
                }
              />
            </svg>

            <span
              style={{
                color: `${
                  state.selectedPropertyCategory === "homes"
                    ? "#DC044D"
                    : "#727885"
                }`,
              }}
            >
              Homes
            </span>
          </li>

          <li
            style={{
              borderBottom: `${
                state.selectedPropertyCategory === "plots"
                  ? "4px solid #DC044D"
                  : "none"
              }`,
            }}
            onClick={() => handlePropertyCategoryChange("plots")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="29"
              height="27"
              viewBox="0 0 29 27"
              fill="none"
            >
              <path
                d="M11.6915 10.8958C12.6821 11.9368 13.6504 13.0612 13.6504 14.3513H15.3496C15.3496 13.0612 16.3179 11.9368 17.3127 10.8919L17.6927 10.4917C19.0467 9.06767 20.4473 7.59534 20.4473 5.58105C20.4473 2.50398 17.779 0 14.5 0C11.221 0 8.55273 2.50398 8.55273 5.58105C8.55273 7.59534 9.95329 9.06767 11.3073 10.4917L11.6915 10.8958ZM14.5 3.18917C15.9055 3.18917 17.0488 4.26212 17.0488 5.58105C17.0488 6.89999 15.9055 7.97294 14.5 7.97294C13.0945 7.97294 11.9512 6.89999 11.9512 5.58105C11.9512 4.26212 13.0945 3.18917 14.5 3.18917Z"
                fill={
                  state.selectedPropertyCategory === "plots"
                    ? "#DC044D"
                    : "#727885"
                }
              />
              <path
                d="M14.5 6.37828C14.9692 6.37828 15.3496 6.02132 15.3496 5.58098C15.3496 5.14065 14.9692 4.78369 14.5 4.78369C14.0308 4.78369 13.6504 5.14065 13.6504 5.58098C13.6504 6.02132 14.0308 6.37828 14.5 6.37828Z"
                fill={
                  state.selectedPropertyCategory === "plots"
                    ? "#DC044D"
                    : "#727885"
                }
              />
              <path
                d="M0 9H5.1543V20.2684H0V9ZM23.8457 9H29V20.2684H23.8457V9ZM0 21.863H3.45508V23.4576H0V21.863ZM5.1543 21.863H8.55273V23.4576H5.1543V21.863ZM10.252 21.863H13.6504V23.4576H10.252V21.863ZM15.3496 21.863H18.748V23.4576H15.3496V21.863ZM20.4473 21.863H23.8457V23.4576H20.4473V21.863ZM25.5449 21.863H29V23.4576H25.5449V21.863ZM0 25.0522H29V26.6468H0V25.0522ZM6.85352 9V20.2684H22.1465V9H20.6842C20.1428 9.73489 19.5269 10.3905 18.9621 10.9847L18.5812 11.3849C17.8387 12.165 17.0488 13.0558 17.0488 13.7838V15.3783H11.9512V13.7838C11.9512 13.0558 11.163 12.1666 10.4237 11.3903L10.0396 10.9855C9.47411 10.391 8.85775 9.7351 8.31609 9H6.85352Z"
                fill={
                  state.selectedPropertyCategory === "plots"
                    ? "#DC044D"
                    : "#727885"
                }
              />
            </svg>
            <span
              style={{
                color: `${
                  state.selectedPropertyCategory === "plots"
                    ? "#DC044D"
                    : "#727885"
                }`,
              }}
            >
              Plots
            </span>
          </li>
          <li
            style={{
              borderBottom: `${
                state.selectedPropertyCategory === "commercials"
                  ? "4px solid #DC044D"
                  : "none"
              }`,
            }}
            onClick={() => handlePropertyCategoryChange("commercials")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="29"
              viewBox="0 0 30 29"
              fill="none"
            >
              <path
                d="M26.9773 26.5011V8.04306H15.8789V26.5011H14.1211V4.17041L3.02273 5.9062V26.5011H0V28.1506H30V26.5011H26.9773ZM22.6372 10.415H24.5043V12.0646H22.6372V10.415ZM22.6372 14.4365H24.5043V16.0861H22.6372V14.4365ZM22.6372 18.458H24.5043V20.1076H22.6372V18.458ZM22.6372 22.4796H24.5043V24.1291H22.6372V22.4796ZM18.3519 10.415H20.2189V12.0646H18.3519V10.415ZM18.3519 14.4365H20.2189V16.0861H18.3519V14.4365ZM18.3519 18.458H20.2189V20.1076H18.3519V18.458ZM18.3519 22.4796H20.2189V24.1291H18.3519V22.4796ZM9.78105 6.39348H11.6481V8.04306H9.78105V6.39348ZM9.78105 10.415H11.6481V12.0646H9.78105V10.415ZM9.78105 14.4365H11.6481V16.0861H9.78105V14.4365ZM9.78105 18.458H11.6481V20.1076H9.78105V18.458ZM5.49568 10.415H7.36277V12.0646H5.49568V10.415ZM5.49568 14.4365H7.36277V16.0861H5.49568V14.4365ZM5.49568 18.458H7.36277V20.1076H5.49568V18.458ZM5.55029 22.4796H11.5935V26.5011H9.83572V24.1291H7.30811V26.5011H5.55029V22.4796Z"
                fill={
                  state.selectedPropertyCategory === "commercials"
                    ? "#DC044D"
                    : "#727885"
                }
              />
              <path
                d="M5.16553 0H11.9785V2.83314L5.16553 3.89871V0Z"
                fill={
                  state.selectedPropertyCategory === "commercials"
                    ? "#DC044D"
                    : "#727885"
                }
              />
            </svg>
            <span
              style={{
                color: `${
                  state.selectedPropertyCategory === "commercials"
                    ? "#DC044D"
                    : "#727885"
                }`,
              }}
            >
              Commercial
            </span>
          </li>
        </nav>

        <nav className={classes.property_subcategory_navbar}>
          <li
            className={`${
              state.selectedPropertySubCategory === "popular" &&
              classes.active_sub_category
            }`}
            onClick={() => handlePropertySubCategoryChange("popular")}
          >
            Popular
          </li>
          <li
            className={`${
              state.selectedPropertySubCategory === "type" &&
              classes.active_sub_category
            }`}
            onClick={() => handlePropertySubCategoryChange("type")}
          >
            Type
          </li>
          <li
            className={`${
              state.selectedPropertySubCategory === "area size" &&
              classes.active_sub_category
            }`}
            onClick={() => handlePropertySubCategoryChange("area size")}
          >
            Area Size
          </li>
        </nav>

        <div className={classes.properties_slider_container}>
          <Slider {...propertySliderSettings}>
            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>

            <div className={classes.property_detail_slides}>
              <div className={classes.property_size}>120 - 125 sq</div>
              <div className={classes.property_type}>Houses</div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Section2;
