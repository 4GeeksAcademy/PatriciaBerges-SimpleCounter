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
        <div>{count}</div>
    )
}


export {Counter}