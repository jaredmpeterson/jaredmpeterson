import React, { Component } from 'react'
import classes from './Trash.css'

import full from '../../../../assets/dockicons/trashfull_icon.png'
import empty from '../../../../assets/dockicons/trashempty_icon.png'

class Trash extends Component {
  constructor(props) {
    super(props)
    this.state = { isTrashFull: true }
  }

  toggleTrash = () => {
    this.setState(prevState => ({
      isTrashFull: !prevState.isTrashFull,
    }))
  }

  render() {
    const isTrashFull = this.state.isTrashFull

    let icon = null

    if (isTrashFull) {
      icon = <img src={full} alt="Trash" onClick={this.toggleTrash} />
    } else {
      icon = <img src={empty} alt="Trash" onClick={this.toggleTrash} />
    }

    return <div className={classes.Trash}>{icon}</div>
  }
}

export default Trash
