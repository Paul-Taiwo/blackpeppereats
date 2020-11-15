/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import Text from "./Text";

const PopularSection = () => {
	return (
		<Section>
			<Text.Title text="What’s Popular?" />
		</Section>
	);
};

const Section = styled.section`
	padding-top: 66px;
	padding-bottom: 65px;
`;

export default PopularSection;
