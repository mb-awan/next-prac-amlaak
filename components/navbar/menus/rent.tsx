import classes from "./rent.module.scss";

import React from "react";

const RentMenu = ({ show }: { show: boolean }) => {
  return (
    <div
      style={{
        ...(show ? { display: "flex" } : { display: "none" }),
      }}
      className={classes.rent_mega_menu}
    >
      <div className={classes.menu_columns}>
        <h2 className={classes.menu_titles}>Property Type</h2>
        <ul className={classes.menu_items}>
          <li style={{ borderLeft: "none" }}>House for Rent</li>
          <li style={{ borderLeft: "none" }}>Flats for Rent</li>
          <li style={{ borderLeft: "none" }}>Apartment Rent</li>
          <li style={{ borderLeft: "none" }}>Farmhouse Rent</li>
        </ul>
      </div>
      <div className={classes.menu_columns}>
        <h2 className={classes.menu_titles}>Budget</h2>
        <ul className={classes.menu_items}>
          <li>35,000 - 50,000</li>
          <li>50,000 - 70,000</li>
          <li>70,000 - 85,000</li>
          <li>85,000 - 100,000</li>
        </ul>
      </div>
      <div className={classes.menu_columns}>
        <h2 className={classes.menu_titles}>Area</h2>
        <ul className={classes.menu_items}>
          <li>Garden Town</li>
          <li>Bahria Town</li>
          <li>Model Town</li>
          <li>Joher Town</li>
        </ul>
      </div>
      <div className={classes.menu_columns}>
        <h2 className={classes.menu_titles} style={{ borderRight: "none" }}>
          Size
        </h2>
        <ul className={classes.menu_items}>
          <li>3 Marla</li>
          <li>4 Marla</li>
          <li>6 Marla</li>
          <li>10 Marla</li>
        </ul>
      </div>
    </div>
  );
};

export default RentMenu;
