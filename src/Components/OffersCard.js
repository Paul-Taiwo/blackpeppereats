/**
 * External dependencies
 */
import React from "react";

/**
 * Internal dependencies
 */
import foodImg from "assets/images/food1.jpeg";
import styled from "styled-components";

const OffersCard = () => {
	return (
		<Card>
			<ImageContainer>
				<Overlay />
				<Image className="img-fluid w-100 h-100" src={foodImg} alt="food" />
				<Text className="mb-0">
					Get 50% off a scheduled order from Tuesday!
				</Text>
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
`;

const Text = styled.p`
	position: absolute;
	font-weight: 500;
	font-size: 30px;
	line-height: 48px;
	color: #ffffff;
	/* top: 50%; */
	bottom: 0;
	left: 47px;
	width: 40%;
	transform: translateY(-50%);
`;

export default OffersCard;
