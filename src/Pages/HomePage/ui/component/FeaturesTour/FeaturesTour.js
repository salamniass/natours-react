import React, { useEffect } from "react"
import Button from "../../../../../ui/atoms/Button/Button"
import Grid from "../../../../../ui/organims/Layout/Grid"

import "./FeaturesTour.scss"

function FeatureTour() {
  return (
    <>
      <section className="section-tours">
        <div className="u-center-text u-margin-b-big">
          <h2 className="heading-secondary">Most popular tours</h2>
        </div>

        <Grid>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1"></div>

                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1 ">The Sea Explore</span>
                </h4>

                <div className="card__details">
                  <ul>
                    <li>3 days tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tours guides</li>
                    <li>Sleep in crazy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <Button text="Book now!" btnWhiteSm={true} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2"></div>

                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2 ">The Sea Explore</span>
                </h4>

                <div className="card__details">
                  <ul>
                    <li>3 days tours</li>
                    <li>Up to 30 people</li>
                    <li>2 tours guides</li>
                    <li>Sleep in crazy hotels</li>
                    <li>Difficulty: easy</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <Button text="Book now!" btnWhiteSm={true} />
                </div>
              </div>
            </div>
          </div>

          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3"></div>

                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3 ">The Sea Explore</span>
                </h4>

                <div className="card__details">
                  <ul>
                    <li>7 days tours</li>
                    <li>Up to 40 people</li>
                    <li>6 tours guides</li>
                    <li>Sleep provided tents</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">Only</p>
                    <p className="card__price-value">$297</p>
                  </div>
                  <Button text="Book now!" btnWhiteSm={true} />
                </div>
              </div>
            </div>
          </div>
        </Grid>
        <div className="u-center-text u-margin-t-big">
          <Button text="Discover all tours" btnGreen={true} />
        </div>
      </section>
    </>
  )
}

export default FeatureTour
