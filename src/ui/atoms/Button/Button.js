import React from "react"
import "./Button.scss"
function Button(props) {
  return (
    <a className={"btn " + (props.btnWhite ? "btn--white " : "") + (props.btnAnimated ? "btn--animated" : "") + (props.btnText ? "btn-text" : "") + (props.btnWhiteSm ? "btn--white-small" : "") + (props.btnGreen ? "btn--green" : "")} href="">
      {props.text}
    </a>
  )
}

export default Button
