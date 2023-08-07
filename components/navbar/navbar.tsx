/* eslint-disable @next/next/no-img-element */
"use client";
import classes from "./navbar.module.scss";

import MainMenu from "./menus/main";
import { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);

  const toggleMobileMenuHandler = () => {
    setShowMobileMenu((prevValue) => !prevValue);
  };

  return (
    <div className={classes.navbar}>
      <div className={classes.logo_img_container}>
        <img src="/assets/images/logo.png" alt="AMLAAK" />
      </div>
      <MainMenu showMobileMenu={showMobileMenu} />
      <div className={classes.btns_container}>
        <button className={classes.add_listing} type="button">
          Add Listing
        </button>
        <button className={classes.login} type="button">
          Login
        </button>
      </div>
      <div className={classes.toggle_icon}>
        <img
          onClick={toggleMobileMenuHandler}
          src="/assets/images/ham-burger-icon.png"
          alt="ham-burger-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
