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
import SelectFoodControlComponent from "./SelectFoodControlComponent";
import SelectTimeControlComponent from "./SelectTimeControlComponent";
import Button from "./Button";
import Modal from "./Modal";
import ModalPortal from "./ModalPortal";

/**
 * Options for Select
 */
const options = [
	{ value: "spagChick", label: "Spaghetti & Barbecue chicken" },
	{ value: "jollofBeef", label: "Jollof Rice & Beef" },
	{ value: "chinkoRiceBeef", label: "Chinese Rice & Beef" },
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

const deliverWhenOptions = [
	{ value: "now", label: "Deliver now" },
	{ value: "later", label: "Deliver Later" },
];

/**
 * Custom style for select
 */
const customStyle = {
	control: (provided) => ({
		...provided,
		border: "none",
		paddingTop: "10px",
		paddingBottom: "8px",
	}),
	singleValue: (provided) => ({
		...provided,
		fontSize: "14px",
		color: "#000000",
		fontFamily: `"Poppins", sans-serif`,
	}),
	placeholder: (provided) => ({
		...provided,
		fontSize: "14px",
		color: "#000000",
		fontFamily: `"Poppins", sans-serif`,
	}),
	indicatorSeparator: () => ({
		display: "none",
	}),
	dropdownIndicator: (provided) => ({
		...provided,
		color: "#000000",
	}),
};

const HeroBannerSection = () => {
	const [showModal, setShowModal] = useState(false);
	const [selectedOption, setSelectedOption] = useState(null);
	const [deliverWhen, setDeliverWhen] = useState(deliverWhenOptions[0]);

	const handleChange = (selected) => {
		setSelectedOption(selected);
	};

	const handleDeliverWhenChange = (selected) => {
		setDeliverWhen(selected);
	};

	const showModalHandler = () => setShowModal(true);
	const hideModalHandler = () => setShowModal(false);

	return (
		<Section>
			<ModalPortal>
				<Modal isActive={showModal} closeHandler={hideModalHandler} />
			</ModalPortal>

			<SectionText className="position-absolute">
				<SectionTitle className="mb-4">What are you eating Today?</SectionTitle>

				<div className="d-flex flex-column flex-md-row w-100 mb-2">
					<SelectFoodControl
						components={{ Control: SelectFoodControlComponent }}
						styles={customStyle}
						className="mb-3 mb-md-0 mr-md-3"
						value={selectedOption}
						onChange={handleChange}
						options={options}
						placeholder="Select out of our delicious delicacy"
					/>

					<SelectTimeControl
						className="mr-md-3 mb-3 mb-md-0"
						components={{ Control: SelectTimeControlComponent }}
						styles={customStyle}
						value={deliverWhen}
						onChange={handleDeliverWhenChange}
						options={deliverWhenOptions}
						placeholder="Select Closest BlackBells to you"
					/>
					<Button title="Get Food" onClick={showModalHandler} />
				</div>

				<SubText className="">Sign up for extra features</SubText>
			</SectionText>
		</Section>
	);
};

const Section = styled.section`
	position: relative;
	height: 100vh;
	background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
		url(${bgImage}) no-repeat center;
	background-size: cover;
`;

const SelectFoodControl = styled(Select)`
	width: 100%;

	@media screen and (min-width: 768px) {
		width: 50%;
	}
`;

const SelectTimeControl = styled(Select)`
	width: 100%;

	@media screen and (min-width: 768px) {
		width: 25%;
	}
`;

const SectionText = styled.div`
	top: 48%;
	width: 75%;
	left: 40px;
	transform: translateY(-50%);

	@media screen and (min-width: 768px) {
		left: 44px;
		width: 82%;
	}

	@media screen and (min-width: 992px) {
		top: 38%;
		width: 64%;
		left: 56px;
	}
`;

const SectionTitle = styled.h1`
	font-size: 38px;
	font-style: normal;
	font-weight: 500;
	color: #000000;
	font-family: "Poppins", sans-serif;

	@media screen and (min-width: 768px) {
		line-height: 72px;
	}

	@media screen and (min-width: 1200px) {
		font-size: 48px;
	}
`;

const SubText = styled.p`
	font-size: 12px;
	line-height: 18px;
	font-style: normal;
	font-weight: 500;
	color: #000000;
	font-family: "Poppins", sans-serif;
`;

export default HeroBannerSection;
