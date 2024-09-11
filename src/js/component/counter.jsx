import React, { useEffect, useState } from "react";
import PropTypes from "react"

const Counter = ({timer}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const counter = setInterval(() => {
      setCount((prevCount) => (prevCount === 9 ? 0 : prevCount + 1));
    }, timer);  
    return () => clearInterval(counter);
      }, [timer]);
   
    return(
    <div style={secondsStyle}>
      <span style={numberStyle} >{count}</span>
    </div>
  )
}

const secondsStyle = {
  height: "100px",
  width: "75px",
  background: "rgb(20, 20, 20)",
  textAlign: "center",
  color: "white",
  margin: "10px",
  position: "relative",
  borderRadius: "10px",
  borderLeft: "solid 2px grey",
  borderRight: "solid 2px grey"
}

const numberStyle = {
  top: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  margin: "0px",
  padding: "0px",
  fontSize: "70px"
}


export {Counter, secondsStyle, numberStyle}