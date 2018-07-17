import React from 'react'
import classes from './DockIcon.css'

import image from '../../../../assets/dockicons/finder_icon.png'

const dockIcon = props => {
  let attachedClasses = [classes.DockIcon, classes.Close]
  if (props.open) {
    attachedClasses = [classes.DockIcon, classes.Open]
  }
  return (
    <div className={attachedClasses.join(' ')}>
      <img src={image} alt={props.name} />
      <div className={classes.Open} />
    </div>
  )
}

export default dockIcon
