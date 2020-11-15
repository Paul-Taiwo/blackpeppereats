/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Internal dependencies
 */

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
	width: 900px;
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
	height: 336px;
	border-radius: 30px;
	overflow: hidden;
	position: relative;
`;

const Image = styled.img`
	object-fit: cover;
	object-position: center;
`;

const Text = styled.p`
	font-family: "Poppins", sans-serif;
	position: absolute;
	font-weight: 500;
	font-size: 30px;
	line-height: 40px;
	color: #ffffff;
	/* top: 50%; */
	bottom: 0;
	left: 47px;
	width: 42%;
	transform: translateY(-50%);
`;

OffersCard.propTypes = {
	offerName: PropTypes.string.isRequired,
	offerImage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};

export default OffersCard;
