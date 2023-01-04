import React from "react"

function Icons({ type, className }) {
  const iconColors = {
    dark: "#55c57a"
  }

  switch (type) {
    case "basic-word":
      return (
        <svg className={className} width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
          <path
            fill="none"
            stroke={iconColors.dark}
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M32.001,0.887c17.184,0,31.113,13.929,31.112,31.113
	C63.114,49.185,49.184,63.115,32,63.113C14.815,63.114,0.887,49.185,0.888,32.001C0.885,14.816,14.815,0.887,32.001,0.887z"
          />
          <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="32" y1="1" x2="32" y2="63" />
          <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="63" y1="32" x2="1" y2="32" />
          <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M30,1c0,0-14,11-14,31s14,31,14,31" />
          <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M34,1c0,0,14,11,14,31S34,63,34,63" />
          <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M8,12c0,0,5,10,24,10s24-10,24-10" />
          <path fill="none" strokeWidth="2" strokeMiterlimit="10" d="M8,52c0,0,5-10,24-10s24,10,24,10" />
        </svg>
      )
      break

    case "basic-compass":
      return (
        <svg className={className} width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
          <circle fill="none" strokeWidth="2" strokeMiterlimit="10" cx="32" cy="35" r="28.292" />
          <polygon
            fill="none"
            stroke={iconColors.dark}
            strokeWidth="2"
            strokeLinejoin="bevel"
            strokeMiterlimit="10"
            points="37,40 45,21 26,29 
	19,47 "
          />
          <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="26" y1="29" x2="37" y2="40" />
          <path
            fill="none"
            stroke={iconColors.dark}
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M36.9,7C36.965,6.677,37,6.342,37,6
	c0-2.761-2.239-5-5-5s-5,2.239-5,5c0,0.342,0.035,0.677,0.1,1"
          />
          <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="32" y1="7" x2="32" y2="12" />
          <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="32" y1="58" x2="32" y2="63" />
          <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="60" y1="35" x2="55" y2="35" />
          <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="9" y1="35" x2="4" y2="35" />
        </svg>
      )
      break

    case "basic-map":
      return (
        <svg className={className} width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
          <g>
            <polygon
              fill="none"
              stroke={iconColors.dark}
              strokeWidth="2"
              strokeMiterlimit="10"
              points="1,59 22,51 42,59 63,51 63,5 42,13 22,5 
             1,13 	"
            />
            <g>
              <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="22" y1="5" x2="22" y2="51" />
            </g>
            <g>
              <line fill="none" strokeWidth="2" strokeMiterlimit="10" x1="42" y1="13" x2="42" y2="59" />
            </g>
          </g>
        </svg>
      )
      break

    case "basic-heart":
      return (
        <svg className={className} width="64px" height="64px" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
          <path
            fill="none"
            stroke={iconColors.dark}
            strokeWidth="2"
            strokeMiterlimit="10"
            d="M1,21c0,20,31,38,31,38s31-18,31-38
	c0-8.285-6-16-15-16c-8.285,0-16,5.715-16,14c0-8.285-7.715-14-16-14C7,5,1,12.715,1,21z"
          />
        </svg>
      )
      break

    default:
      return <svg width="25" height="25" viewBox="0 0 25 25" fill="#4868DB"></svg>
      break
  }
  return <></>
}

export default Icons
