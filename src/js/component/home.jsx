import React from "react";
import { Counter } from "./counter";



//create your first component
const Home = () => {
	return (
		<div>
			<Counter timer={100000000} />
			<Counter timer={10000000} />
			<Counter timer={1000000} />
			<Counter timer={100000} />
			<Counter timer={10000} />
			<Counter timer={1000} />
		</div>
	);
};

export default Home;
