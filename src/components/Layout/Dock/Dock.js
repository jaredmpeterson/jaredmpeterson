import React from 'react'
import classes from './Dock.css'

import Trash from './Trash/Trash'
import Aux from '../../../hoc/Aux'
import DockIcon from './DockIcon/DockIcon'

const Dock = props => {
  let dockApps = (
    <Aux>
      {props.apps.map((app, index) => {
        return <DockIcon key={app.name} name={app.name} image={app.image} />
      })}
    </Aux>
  )

  return (
    <footer className={classes.Footer}>
      <div className={classes.Dock}>
        {dockApps}
        <Trash />
      </div>
    </footer>
  )
}

export default Dock
