import React from 'react'
import classes from './Utilities.css'
import Clock from './Clock/Clock'

const Utilities = props => {
  return (
    <div className={classes.Utilities}>
      <ul>
        <li />
        <li>
          <i className="fa fa-wifi fa-lg" aria-hidden="true" />
        </li>
        <li>
          <i className="fa fa-battery-quarter fa-lg" aria-hidden="true" />
        </li>
        <Clock />
        <li>
          <i className="fa fa-search fa" aria-hidden="true" />
        </li>
      </ul>
    </div>
  )
}

export default Utilities
