/**
 * External dependencies
 */
import React from "react";

/**
 * Internal dependencies
 */
import foodImg from "assets/images/food1.jpeg";
import styled from "styled-components";

const FoodCategoryCard = () => {
	return (
		<Card>
			<ImageContainer>
				<Overlay />
				<Image className="img-fluid w-100 h-100" src={foodImg} alt="food" />
				<Text>Title text middle</Text>
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
	position: absolute;
	font-weight: 500;
	font-size: 30px;
	line-height: 48px;
	color: #ffffff;
	top: 50%;
	left: 50%;
	width: 90%;
	transform: translate(-50%, -50%);
`;

export default FoodCategoryCard;
