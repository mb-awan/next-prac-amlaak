/* eslint-disable @next/next/no-img-element */
"use client";

import classes from "./main.module.scss";

import React, { useEffect } from "react";

import { useState } from "react";
import RentMenu from "./rent";
import SalesMenu from "./sales";

type menuItems = "home" | "sales" | "rent" | "about" | "contact";

const MainMenu = ({ showMobileMenu }: { showMobileMenu: boolean }) => {
  const [selectedMenu, setSelectedMenu] = useState<menuItems>("home");

  const homeMenuHandler = () => {
    setSelectedMenu("home");
  };
  const salesMenuHandler = () => {
    setSelectedMenu("sales");
  };
  const rentMenuHandler = () => {
    setSelectedMenu("rent");
  };
  const aboutMenuHandler = () => {
    setSelectedMenu("about");
  };
  const contactMenuHandler = () => {
    setSelectedMenu("contact");
  };

  const [screenWidth, setScreenWidth] = useState<number>(window?.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ul
      className={classes.menu_container}
      style={{
        ...(showMobileMenu || screenWidth > 576
          ? { display: "flex" }
          : { display: "none" }),
      }}
    >
      <li
        className={`${selectedMenu === "home" && classes.active}`}
        onClick={homeMenuHandler}
      >
        Home
      </li>
      <li
        className={`${selectedMenu === "sales" && classes.active}`}
        onClick={salesMenuHandler}
      >
        Sales
        <img
          style={{
            ...(selectedMenu === "sales" && { display: "none" }),
          }}
          src="/assets/images/arrow-down.png"
          alt="arrow-down"
        />
        <SalesMenu show={selectedMenu === "sales"} />
      </li>
      <li
        className={`${selectedMenu === "rent" && classes.active}`}
        onClick={rentMenuHandler}
      >
        Rent
        <img
          style={{
            ...(selectedMenu === "rent" && { display: "none" }),
          }}
          src="/assets/images/arrow-down.png"
          alt="arrow-down"
        />
        <img
          style={{
            ...(selectedMenu !== "rent" && { display: "none" }),
          }}
          src="/assets/images/polygon.png"
          alt="polygon"
        />
        <RentMenu show={selectedMenu === "rent"} />
      </li>
      <li
        className={`${selectedMenu === "about" && classes.active}`}
        onClick={aboutMenuHandler}
      >
        About
      </li>
      <li
        className={`${selectedMenu === "contact" && classes.active}`}
        onClick={contactMenuHandler}
      >
        Contact
      </li>
    </ul>
  );
};

export default MainMenu;
