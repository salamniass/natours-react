import React, { useEffect } from "react"
//import HomePage from "../../../Pages/HomePage/HomePage"
import Footer from "../../molecules/Footer/Footer"
import Navigation from "../../molecules/Navigation/Navigation"

function Layout(props) {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  )
}

export default Layout
