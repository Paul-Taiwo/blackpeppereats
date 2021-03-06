/**
 * External dependencies
 */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Button = ({ title, className, type = "button", onClick }) => {
	return (
		// eslint-disable-next-line react/button-has-type
		<StyledButton
			type={type || "button"}
			onClick={onClick}
			className={className}
		>
			{title}
		</StyledButton>
	);
};

const StyledButton = styled.button`
	font-family: "Poppins", sans-serif;
	background: #000000;
	border-radius: 6px;
	font-weight: 600;
	font-size: 16px;
	/* line-height: 24px; */
	padding: 10px 20px;
	color: #fff;

	&:focus,
	&:hover {
		color: #fff;
	}
`;

Button.defaultProps = {
	className: "btn",
	onClick: () => null,
};

Button.propTypes = {
	title: PropTypes.string.isRequired,
	className: PropTypes.string,
	onClick: PropTypes.func,
	type: PropTypes.string.isRequired,
};

export default Button;
