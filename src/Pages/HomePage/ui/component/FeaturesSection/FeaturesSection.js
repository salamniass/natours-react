import React, { useState } from "react"
import Icons from "../../../../../resources/icons/icons"
import Grid from "../../../../../ui/organims/Layout/Grid"

import "./FeaturesSection.scss"

function FeaturesSection() {
  const [cardFeature, setCardFeature] = useState([
    { title: "Explore the world", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam Veniam Veniam", type: "basic-word", id: 1234 },
    { title: "Meet Natoure", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam Veniam Veniam", type: "basic-compass", id: 12345 },
    { title: "Find your way", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam Veniam Veniam", type: "basic-map", id: 12346 },
    { title: "LIVE YOUR LIFE", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam Veniam Veniam", type: "basic-heart", id: 12347 }
  ])
  return (
    <section className="section-features">
      <Grid>
        {cardFeature.map(card => (
          <SectionFeature title={card.title} text={card.text} type={card.type} id={card.id} />
        ))}
        {/* <div className="col-1-of-4">
          <div className="feature-box">
            <Icons className="icon feature-box__icon" type="basic-word" />
            <h3 className="heading-tertiary u-margin-b-small">Explore the world</h3>
            <p className="feature-box__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam Veniam Veniam</p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <Icons className="icon feature-box__icon" type="basic-compass" />
            <h3 className="heading-tertiary u-margin-b-small">Meet Natoure</h3>
            <p className="feature-box__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam Veniam Veniam</p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <Icons className="icon feature-box__icon" type="basic-map" />
            <h3 className="heading-tertiary u-margin-b-small">Find your way</h3>
            <p className="feature-box__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam Veniam Veniam</p>
          </div>
        </div> */}
        {/* <SectionFeature /> */}
      </Grid>
    </section>
  )
}

function SectionFeature(props) {
  return (
    <>
      <div className="col-1-of-4">
        <div className="feature-box">
          <Icons className="icon feature-box__icon" type={props.type} />
          <h3 className="heading-tertiary u-margin-b-small">{props.title}</h3>
          <p className="feature-box__text">{props.text}</p>
        </div>
      </div>
    </>
  )
}

export default FeaturesSection
