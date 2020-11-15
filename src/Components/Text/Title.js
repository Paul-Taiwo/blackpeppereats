/**
 * External dependencies
 */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Internal dependencies
 */

/**
 * @param {string} text Text
 */
const Title = ({ text }) => {
	return <Text className="mb-0">{text}</Text>;
};

const Text = styled.h1`
	font-family: "Poppins", sans-serif;
	font-weight: 500;
	font-size: 22px;
	color: #000000;

	@media screen and (min-width: 768px) {
		font-size: 28px;
		line-height: 72px;
	}

	@media screen and (min-width: 992px) {
		font-size: 38px;
	}
`;

Title.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Title;
