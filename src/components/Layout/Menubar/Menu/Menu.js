import React from 'react'
import classes from './Menu.css'

const Menu = props => {
  return (
    <div className={classes.Menu}>
      <nav className={classes.Mainmenu}>
        <ul>
          <li>
            <a href="#">
              <i className="fa fa-apple" aria-hidden="true" />
            </a>
            <ul id="apple__menu">
              <li>
                <a href="#">About This Site</a>
              </li>
              <li className={classes.Menubreak} />
              <li>
                <a href="#">System Preferences...</a>
              </li>
              <li>
                <a href="#">App Store...</a>
              </li>
              <li className={classes.Menubreak} />
              <li>
                <a href="#">Sleep</a>
              </li>
              <li>
                <a href="#">Restart...</a>
              </li>
              <li>
                <a href="#">Shut Down...</a>
              </li>
              <li className={classes.Menubreak} />
              <li>
                <a href="#">Log Out...</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">JMP</a>
            <ul>
              <li>
                <a href="#">About Jared</a>
              </li>
              <li className={classes.Menubreak} />
              {/* Easter Egg: Take out trash from Twins */}
              <li>
                <a href="#">Empty Trash...</a>
              </li>
              <li className={classes.Menubreak} />
              <li>
                <a href="#">Show All</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">File</a>
            {/* <ul>
              <li><a href="#">Sub Menu 1</a></li>
              <li><a href="#">Sub Menu 2</a></li>
              <li><a href="#">Sub Menu 3</a></li>
              <li><a href="#">Sub Menu 4</a>
                <ul>
                  <li><a href="#">Deep Menu 1</a>
                    <ul>
                      <li><a href="#">Sub Deep 1</a></li>
                      <li><a href="#">Sub Deep 2</a></li>
                      <li><a href="#">Sub Deep 3</a></li>
                      <li><a href="#">Sub Deep 4</a></li>
                    </ul>
                  </li>
                  <li><a href="#">Deep Menu 2</a></li>
                </ul>
              </li>
              <li><a href="#">Sub Menu 5</a></li>
            </ul> */}
          </li>
          <li>Edit</li>
          <li>View</li>
          <li>
            <a href="#">Go</a>
            <ul>
              <li>
                <a
                  href="https://github.com/jaredmpeterson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github fa-lg fa-fw" aria-hidden="true" />GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/thejaredpeterson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className="fa fa-linkedin fa-fw fa-lg"
                    aria-hidden="true"
                  />LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/jaredmpeterson"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter fa-fw fa-lg" aria-hidden="true" />Twitter
                </a>
              </li>
            </ul>
          </li>
          <li>Window</li>
          <li>
            <a href="#">Help</a>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">What's New in jmpOS</a>
              </li>
              {/* <li><a href="#"></a></li> */}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menu
