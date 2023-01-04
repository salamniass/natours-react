import React from "react"
import "./AboutSection.scss"
import Button from "../../../../../ui/atoms/Button/Button"
import img1 from "../../../../../resources/images/nat-1-large.jpg"
import img2 from "../../../../../resources/images/nat-2-large.jpg"
import img3 from "../../../../../resources/images/nat-3-large.jpg"
import Grid from "../../../../../ui/organims/Layout/Grid"

function AboutSection() {
  return (
    <>
      <section className="section-about">
        <div className="u-center-text u-margin-b-big">
          <h2 className="heading-secondary">Exciting tours for adventours people</h2>
        </div>
        <Grid>
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-b-small">You are going to fall in love with nature</h3>
            <p className="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore quam sit laboriosam eos suscipit aperiam atque. Praesentium odit aliquam quos, possimus, quod sed magni beatae corrupti impedit obcaecati nulla! Consequuntur!</p>

            <h3 className="heading-tertiary u-margin-b-small">LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h3>
            <p className="paragraph">lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.</p>

            <Button btnText={true} text="Learn more &rarr;" />
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img src={img1} alt="gallery 1" className="composition__photo composition__photo--p1" />
              <img src={img2} alt="gallery 2" className="composition__photo composition__photo--p2" />
              <img src={img3} alt="gallery 3" className="composition__photo composition__photo--p3" />
            </div>
          </div>
        </Grid>
      </section>
    </>
  )
}

export default AboutSection
