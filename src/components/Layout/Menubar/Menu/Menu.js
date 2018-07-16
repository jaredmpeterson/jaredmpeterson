import React from 'react'
import classes from './Menu.css'

const Menu = props => {
  return (
    <nav className={classes.Menu}>
      <i className="fa fa-apple" aria-hidden="true" />
      <ul className={classes.Mainmenu}>
        <li>
          <p>JMP</p>
          <ul className={classes.Submenu}>
            <li>
              <p>About Jared</p>
            </li>
            <li className={classes.Break} />
            <li>
              <p>Empty Trash...</p>
            </li>
            <li className={classes.Break} />
            <li>
              <p>Show All</p>
            </li>
          </ul>
        </li>
        <li>
          <p>File</p>
        </li>
        <li>Edit</li>
        <li>View</li>
        <li>
          <p>Go</p>
        </li>
        <li>Window</li>
        <li>
          <p>Help</p>
        </li>
      </ul>
    </nav>
  )
}

export default Menu
