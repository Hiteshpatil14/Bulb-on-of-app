import React from "react"
import { useState } from "react"
function App() {
  const [state, setState] = useState(false)
  const style = {
    imgstyle: {
      display: "block",
      marginBottom: "20px",
      marginLeft: "50%"

    },
    buttonstyle: {
      display: 'inline',
      margin: "auto",
      marginLeft: "50%",
      padding: "5px 10px",
      fontSize: "2em"
    }
  }
  function onofbule() {
    setState(
      !state
    )
  }
  return (
    <>
      <img style={style.imgstyle} src={state
        ? "https://www.w3schools.com/jsref/bulbon.gif"
        : "https://www.w3schools.com/js/pic_bulboff.gif"} alt="bulb" />
      <button onClick={onofbule} style={style.buttonstyle}>on/off</button>
    </>
  )
}
export default App

