import "./Header.scss"
import logo from "../../../resources/images/logo-white.png"
import React from "react"
import Button from "../../atoms/Button/Button"

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
          <Button text="Discover our tours" btnWhite={true} btnAnimated={true} />
        </div>
      </header>
    </>
  )
}

export default Header
