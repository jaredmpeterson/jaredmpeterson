import React from 'react'

import classes from './Menubar.css'
import Menu from './Menu/Menu'
import Utilities from './Utilities/Utilities'

const Menubar = props => {
  return (
    <header className={classes.Menubar}>
      <Menu />
      <Utilities />
    </header>
  )
}

export default Menubar
