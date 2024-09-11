import React from "react";
import { Counter, numberStyle } from "./counter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from "@fortawesome/free-solid-svg-icons";


//create your first component
const SimpleCounter = () => {
	let clockStyle = {
	height: "100px",
  	width: "100px",
  	background: "rgb(20, 20, 20)",
  	textAlign: "center",
  	color: "white",
  	margin: "10px",
  	position: "relative",
  	borderRadius: "10px",
  	borderLeft: "solid 2px grey",
  	borderRight: "solid 2px grey"
	}
	return (
		<div className="d-flex bg-black justify-content-center m-3">
			<div style={clockStyle} >
				<span style={numberStyle}><FontAwesomeIcon icon={faClock} /></span>
			</div>
			<Counter timer={100000000} />
			<Counter timer={10000000} />
			<Counter timer={1000000} />
			<Counter timer={100000} />
			<Counter timer={10000} />
			<Counter timer={1000} />
		</div>
	);
};

export default SimpleCounter;
