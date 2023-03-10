import React from "react"

import "./Navigation.scss"

function Navigation() {
  return (
    <>
      <div className="navigation">
        <input className="navigation__checkbox" type="checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__button">
          Menu
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <a href="" className="navigation__link">
                About Natours
              </a>
            </li>
            <li className="navigation__item">
              <a href="" className="navigation__link">
                Your Benefits
              </a>
            </li>

            <li className="navigation__item">
              <a href="" className="navigation__link">
                Popular tours
              </a>
            </li>

            <li className="navigation__item">
              <a href="" className="navigation__link">
                Stories
              </a>
            </li>

            <li className="navigation__item">
              <a href="" className="navigation__link">
                Book now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default Navigation
