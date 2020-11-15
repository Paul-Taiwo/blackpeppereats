/**
 * External dependencies
 */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ title, className, type = "button" }) => {
	return (
		// eslint-disable-next-line react/button-has-type
		<StyledButton type={type || "button"} className={className}>
			{title}
		</StyledButton>
	);
};

const StyledButton = styled.button`
	font-family: "Poppins", sans-serif;
`;

Button.defaultProps = {
	className: "btn",
};

Button.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	type: PropTypes.string.isRequired,
};

export default Button;
