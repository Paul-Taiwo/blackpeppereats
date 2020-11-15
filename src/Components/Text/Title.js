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
	return <Text>{text}</Text>;
};

const Text = styled.h1`
	font-family: "Poppins", sans-serif;
	font-weight: 500;
	font-size: 38px;
	line-height: 72px;
	color: #000000;
`;

Title.propTypes = {
	text: PropTypes.string.isRequired,
};

export default Title;
