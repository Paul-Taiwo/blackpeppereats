/**
 * External dependencies
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Internal dependencies
 */
import styled from "styled-components";

const FoodCategoryCard = ({ categoryName, categoryImage }) => {
	return (
		<Card>
			<ImageContainer>
				<Overlay />
				<Image
					className="img-fluid w-100 h-100"
					src={categoryImage}
					alt="food"
				/>
				<Text>{categoryName}</Text>
			</ImageContainer>
		</Card>
	);
};

const Card = styled.div`
	margin: 0 8px;
`;

const Overlay = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	background: linear-gradient(
		360deg,
		rgba(56, 56, 56, 0.5) -22.58%,
		rgba(84, 84, 84, 0) 197.58%
	);
`;

const ImageContainer = styled.div`
	height: 228px;
	border-radius: 20px;
	overflow: hidden;
	position: relative;
`;

const Image = styled.img`
	object-fit: cover;
`;

const Text = styled.p`
	font-family: "Poppins", sans-serif;
	position: absolute;
	text-align: center;
	font-weight: 500;
	font-size: 30px;
	line-height: 48px;
	color: #ffffff;
	top: 50%;
	left: 50%;
	width: 90%;
	transform: translate(-50%, -50%);
`;

FoodCategoryCard.propTypes = {
	categoryName: PropTypes.string.isRequired,
	categoryImage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
		.isRequired,
};

export default FoodCategoryCard;
