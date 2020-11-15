/**
 * External dependencies
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Internal dependencies
 */

const Button = ({ title, className, type = "button" }) => {
	return (
		// eslint-disable-next-line react/button-has-type
		<button type={type || "button"} className={className}>
			{title}
		</button>
	);
};

Button.defaultProps = {
	className: "btn",
};

Button.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	type: PropTypes.string.isRequired,
};

export default Button;
