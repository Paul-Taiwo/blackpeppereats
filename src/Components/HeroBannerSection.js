/**
 * External dependencies
 */
import React, { useState } from "react";
import styled from "styled-components";
import Select from "react-select";

/**
 * Internal dependencies
 */
import bgImage from "assets/images/heroBg.jpeg";

const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

const HeroBannerSection = () => {
	const [selectedOption, setSelectedOption] = useState(null);

	const handleChange = (selected) => {
		setSelectedOption({ selected });
		console.log(`Option selected:`, selected);
	};

	return (
		<Section>
			<SectionText className="position-absolute">
				<SectionTitle>What are you eating Today?</SectionTitle>

				<div className="d-flex w-100">
					<Select
						className="w-50"
						value={selectedOption}
						onChange={handleChange}
						options={options}
						placeholder="Select Closest BlackBells to you"
					/>
					<Select
						value={selectedOption}
						onChange={handleChange}
						options={options}
						placeholder="Select Closest BlackBells to you"
					/>
				</div>
			</SectionText>
		</Section>
	);
};

const Section = styled.section`
	position: relative;
	height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
		url(${bgImage}) no-repeat center;
	background-size: cover;
`;

const SectionText = styled.div`
	top: 30%;
	left: 56px;
	transform: translateY(-50%);
`;

const SectionTitle = styled.h1`
	font-size: 48px;
	line-height: 72px;
	font-style: normal;
	font-weight: 500;
	color: #000000;
	font-family: "Poppins", sans-serif;
`;

export default HeroBannerSection;
