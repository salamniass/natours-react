import React from "react"
import Button from "../../../../../ui/atoms/Button/Button"
import Grid from "../../../../../ui/organims/Layout/Grid"
import "./Booking.scss"

function Booking() {
  return (
    <>
      <section className="section-book">
        <Grid>
          <div className="book">
            <div className="book__form">
              <form action="#" className="form">
                <div className="u-margin-b-small">
                  <h2 className="heading-secondary">Start booking now</h2>
                </div>
                <div className="form__group">
                  <input type="text" placeholder="Full Name" id="name" className="form__input" required />
                  <label htmlFor="name" className="form__label">
                    Full Name
                  </label>
                </div>

                <div className="form__group">
                  <input type="email" placeholder="Email adress" id="email" className="form__input" required />
                  <label htmlFor="email" className="form__label">
                    Email adress
                  </label>
                </div>
                <div className="form__group">
                  <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id="small" name="size" />
                    <label className="form__radio-label" htmlFor="small">
                      <span className="form__radio-button"></span>
                      Small tour group
                    </label>
                  </div>

                  <div className="form__radio-group">
                    <input type="radio" className="form__radio-input" id="large" name="size" />
                    <label className="form__radio-label" htmlFor="large">
                      <span className="form__radio-button"></span>
                      Large tour group
                    </label>
                  </div>
                </div>

                <div className="form__group u-margin-b-small">
                  <Button btnGreen={true} text="Next step &rarr;" />
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </section>
    </>
  )
}

export default Booking
