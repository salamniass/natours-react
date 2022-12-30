import "./Header.scss"
import logo from "../../../resources/images/logo-white.png"
import React from "react"

function Header() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <img className="header__logo" src={logo} alt="logo white " />
        </div>
        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">Outdoors</span>
            <span className="heading-primary--sub">is where life happens</span>
          </h1>
          <a className="btn btn--white btn--animated" href="">
            Discover our tours
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
