import React from "react";
import { Counter, secondsStyle, numberStyle } from "./counter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//create your first component
const SimpleCounter = () => {
	return (
		<div className="d-flex bg-black justify-content-center m-3">
			<div style={secondsStyle} >
				<span style={numberStyle}><FontAwesomeIcon icon="fa-solid fa-clock-nine" /></span>
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
