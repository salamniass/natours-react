import React, { useEffect } from "react"
import Grid from "../../../../../ui/organims/Layout/Grid"

import "./StorieSection.scss"
import image_nat_8 from "../../../../../resources/images/nat-8.jpg"
import image_nat_9 from "../../../../../resources/images/nat-9.jpg"
import videomp4 from "../../../../../resources/images/video.mp4"
import videowebm from "../../../../../resources/images/video.webm"
import Button from "../../../../../ui/atoms/Button/Button"

function StorieSection() {
  return (
    <>
      <section className="section-stories">
        <div className="bg-video">
          <video className="bg-video__content" autoPlay muted loop>
            <source src={videomp4} type="video/mp4" />
            <source src={videowebm} type="video/webm" />
            Your browser is not supported
          </video>
        </div>
        <div className="u-center-text u-margin-b-big">
          <h2 className="heading-secondary">We make people genuinely happy</h2>
        </div>
        <Grid>
          <div className="story">
            <figure className="story__shape">
              <figcaption className="story__caption">Mary Smith</figcaption>
              <img className="story__image" src={image_nat_8} alt="image nat !" />
            </figure>

            <div className="story__text">
              <h3 className="heading-tertiary u-margin-b-small">I had the best ever with my family</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum eos neque, magni dolor impedit! Esse expedita porro commodi fuga cupiditate architecto quibusdam quam consequatur, eum illum enim error quaerat. Esse expedita porro commodi fuga cupiditate architecto quibusdam quam consequatur, eum illum enim.</p>
            </div>
          </div>
        </Grid>

        <Grid>
          <div className="story">
            <figure className="story__shape">
              <figcaption className="story__caption">Jack Wilson</figcaption>
              <img className="story__image" src={image_nat_9} alt="image nat !" />
            </figure>

            <div className="story__text">
              <h3 className="heading-tertiary u-margin-b-small">I had the best ever with my family</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt laborum eos neque, magni dolor impedit! Esse expedita porro commodi fuga cupiditate architecto quibusdam quam consequatur, eum illum enim error quaerat. Esse expedita porro commodi fuga cupiditate architecto quibusdam quam consequatur, eum illum enim.</p>
            </div>
          </div>
        </Grid>
        <Button btnText={true} text="Read all stories &rarr;" />
      </section>
    </>
  )
}

export default StorieSection
