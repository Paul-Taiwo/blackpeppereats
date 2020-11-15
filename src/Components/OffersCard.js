/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 *
 * @param {string} offerName
 * @param {string | number} offerImage
 */
const OffersCard = ({ offerName, offerImage }) => {
	return (
		<Card>
			<ImageContainer>
				<Overlay />
				<Image className="img-fluid w-100 h-100" src={offerImage} alt="food" />
				<Text className="mb-0">{offerName}</Text>
			</ImageContainer>
		</Card>
	);
};

const Card = styled.div`
	margin: 0 10px;
	width: 250px;

	@media screen and (min-width: 425px) {
		width: 300px;
	}

	@media screen and (min-width: 768px) {
		width: 640px;
	}

	@media screen and (min-width: 992px) {
		width: 800px;
	}

	@media screen and (min-width: 1200px) {
		width: 1100px;
	}
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: linear-gradient(rgba(67, 67, 67, 0.4), rgba(67, 67, 67, 0.4));
`;

const ImageContainer = styled.div`
	height: 162px;
	border-radius: 20px;
	overflow: hidden;
	position: relative;

	@media screen and (min-width: 768px) {
		height: 336px;
		border-radius: 30px;
	}
`;

const Image = styled.img`
	object-fit: cover;
	object-position: center;
`;

const Text = styled.p`
	font-family: "Poppins", sans-serif;
	position: absolute;
	font-weight: 500;
	font-size: 16px;
	color: #ffffff;
	/* top: 50%; */
	bottom: 0;
	left: 26px;
	transform: translateY(-50%);

	@media screen and (min-width: 768px) {
		width: 64%;
		font-size: 24px;
		left: 36px;
		line-height: 36px;
	}

	@media screen and (min-width: 992px) {
		width: 50%;
		font-size: 26px;
		left: 35px;
		line-height: 38px;
	}

	@media screen and (min-width: 1200px) {
		width: 42%;
		font-size: 30px;
		left: 47px;
		line-height: 40px;
	}
`;

OffersCard.propTypes = {
	offerName: PropTypes.string.isRequired,
	offerImage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};

export default OffersCard;
