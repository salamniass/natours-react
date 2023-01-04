import React from "react"
import Header from "../../ui/molecules/Header/Header"
import Layout from "../../ui/organims/Layout/Layout"
import AboutSection from "./ui/component/AboutSection/AboutSection"
import Booking from "./ui/component/Booking/Booking"
import FeaturesSection from "./ui/component/FeaturesSection/FeaturesSection"
import FeatureTour from "./ui/component/FeaturesTour/FeaturesTour"
import StorieSection from "./ui/component/StorieSection/StorieSection"
//import SectionTours from "./ui/component/sectionTours/SectionTours"

function HomePage() {
  return (
    <>
      <Layout>
        <Header />
        <AboutSection />
        <FeaturesSection />
        <FeatureTour />
        <StorieSection />
        <Booking />
      </Layout>
    </>
  )
}

export default HomePage
