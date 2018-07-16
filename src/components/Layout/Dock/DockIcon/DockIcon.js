import React from "react";
import classes from "./DockIcon.css";

import image from "../../../../assets/images/dockicons/finder_icon.png";

const dockIcon = props => {
  return (
    <div className={classes.DockIcon}>
      <img src={image} alt={props.name} />
    </div>
  );
};

export default dockIcon;
