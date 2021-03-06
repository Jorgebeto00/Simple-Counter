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
			<div className="six">{props.digitOne}</div>
			<div className="five">{props.digitFive}</div>
			<div className="four">{props.digitFour}</div>
			<div className="three">{props.digitThree}</div>
			<div className="two">{props.digitTwo}</div>
			<div className="one">{props.digitOne}</div>
		</div>
	);
}

let time = 0;
setInterval(function() {
	ReactDOM.render(<Counter />, document.querySelector("#app"));
	time++;
}, 1000);
