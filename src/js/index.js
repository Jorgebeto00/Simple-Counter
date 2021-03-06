//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function Counter(props) {
	return (
		<div className="counter">
			<div className="clockIcon">
				<i className="far fa-clock"></i>
			</div>
			<div className="six">{props.digitSix % 10}</div>
			<div className="five">{props.digitFive % 10}</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}

Counter.propTypes = {
	digitOne: PropTypes.number,
	digitTwo: PropTypes.number,
	digitThree: PropTypes.number,
	digitFour: PropTypes.number,
	digitFive: PropTypes.number,
	digitSix: PropTypes.number
};

let time = 0;

setInterval(function() {
	const six = Math.floor(time / 100000);
	const five = Math.floor(time / 10000);
	const four = Math.floor(time / 1000);
	const three = Math.floor(time / 100);
	const two = Math.floor(time / 10);
	const one = Math.floor(time / 1);
	ReactDOM.render(
		<Counter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
			digitFive={five}
			digitSix={six}
		/>,
		document.querySelector("#app")
	);
	time++;
}, 1000);
