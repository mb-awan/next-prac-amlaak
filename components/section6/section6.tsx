/* eslint-disable @next/next/no-img-element */
import classes from "./section6.module.scss";

import React from "react";

const details = [
  "Flats for sale in Bahria Town (628)",
  "Flats for sale in Bahria Town (628)",
  "Flats for sale in Bahria Town (628)",
  "Flats for sale in Bahria Town (628)",
  "Flats for sale in Bahria Town (628)",
  "Flats for sale in Bahria Town (628)",
  "Flats for sale in Bahria Town (628)",
  "Flats for sale in Bahria Town (628)",
  "Flats for sale in Bahria Town (628)",
];
const Section6 = () => {
  return (
    <div className={classes.section6}>
      <div className={classes.properties_details_container}>
        <div className={classes.property_details}>
          <h1 className={classes.area_name}>Behria Town</h1>
          <ul className={classes.area_details}>
            {details.map((detail, index) => (
              <li key={index}>Flats for sale in Bahria Town (628)</li>
            ))}
          </ul>
        </div>
        <div className={classes.property_details}>
          <h1 className={classes.area_name}>Gullberg</h1>
          <ul className={classes.area_details}>
            {details.map((detail, index) => (
              <li key={index}>Flats for sale in Bahria Town (628)</li>
            ))}
          </ul>
        </div>
        <div className={classes.property_details}>
          <h1 className={classes.area_name}>Garden Town</h1>
          <ul className={classes.area_details}>
            {details.map((detail, index) => (
              <li key={index}>Flats for sale in Bahria Town (628)</li>
            ))}
          </ul>
        </div>
        <div className={classes.property_details}>
          <h1 className={classes.area_name}>DHA</h1>
          <ul className={classes.area_details}>
            {details.map((detail, index) => (
              <li key={index}>Flats for sale in Bahria Town (628)</li>
            ))}
          </ul>
        </div>
        <div className={classes.property_details}>
          <h1 className={classes.area_name}>Joher Town</h1>
          <ul className={classes.area_details}>
            {details.map((detail, index) => (
              <li key={index}>Flats for sale in Bahria Town (628)</li>
            ))}
          </ul>
        </div>
        <div className={classes.property_details}>
          <h1 className={classes.area_name}>Model Town</h1>
          <ul className={classes.area_details}>
            {details.map((detail, index) => (
              <li key={index}>Flats for sale in Bahria Town (628)</li>
            ))}
          </ul>
        </div>
        <div className={classes.property_details}>
          <h1 className={classes.area_name}>Iqbal Town</h1>
          <ul className={classes.area_details}>
            {details.map((detail, index) => (
              <li key={index}>Flats for sale in Bahria Town (628)</li>
            ))}
          </ul>
        </div>
        <div className={classes.property_details}>
          <h1 className={classes.area_name}>Velencia Town</h1>
          <ul className={classes.area_details}>
            {details.map((detail, index) => (
              <li key={index}>Flats for sale in Bahria Town (628)</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={classes.contact_details_container}>
        <div className={classes.contact_us}>
          <h4 className={classes.heading}>Contact Us</h4>
          <div className={classes.contact}>
            <img src="/assets/images/location-transparent.svg" alt="location" />
            <span>68 Aourangzaib Block New Garden Town Lahore</span>
          </div>
          <div className={classes.contact}>
            <img src="/assets/images/email-transparent.svg" alt="email" />
            <span>info@megaverse.pk</span>
          </div>
        </div>
        <div className={classes.subscription}>
          <div className={classes.input}>
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Enter you Email"
            />
            <img src="/assets/images/send.svg" alt="send" />
          </div>
        </div>
        <ul className={classes.links}>
          <li>Privacy Policy</li>
          <li>Contact Us</li>
          <li>Terms & Condition</li>
        </ul>
        <div className={classes.social_links}>
          <h1 className={classes.heading}>Follow us:</h1>
          <ul className={classes.links_container}>
            <li>
              <img src="/assets/images/facebook.svg" alt="facbook" />
            </li>
            <li>
              <img src="/assets/images/insta.svg" alt="insta" />
            </li>
            <li>
              <img src="/assets/images/pinterest.svg" alt="pinterest" />
            </li>
            <li>
              <img src="/assets/images/youtube.svg" alt="youtube" />
            </li>
            <li>
              <img src="/assets/images/linkedin.svg" alt="linkedin" />
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.footer}>Ⓒ 2023 Copyright Amlaak</div>
    </div>
  );
};

export default Section6;
