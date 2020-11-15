/**
 * External dependencies
 */
import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import currencyFormatter from "utils/currencyFormatter";

/**
 *
 * @param {string} foodName
 * @param {string | number} foodImg
 * @param {string} foodDescription
 * @param {number} foodPrice
 */

const FoodCard = ({ foodName, foodImg, foodDescription, foodPrice }) => {
	return (
		<Card>
			<ImageContainer>
				<Image className="img-fluid w-100 h-100" src={foodImg} alt="food" />
			</ImageContainer>

			<div>
				<FoodName>{foodName}</FoodName>
				<FoodDescription>{foodDescription}</FoodDescription>

				<ButtonGroup
					className="btn-group"
					role="group"
					aria-label="Price and Add to cart button"
				>
					<Button type="button" disabled className="btn">
						{currencyFormatter(foodPrice)}
					</Button>
					<svg
						width={2}
						height={16}
						viewBox="0 0 2 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path d="M1 0V16" stroke="white" strokeWidth="0.4" />
					</svg>

					<Button type="button" className="btn">
						Add to Cart
					</Button>
				</ButtonGroup>
			</div>
		</Card>
	);
};

const Card = styled.div`
	width: 318px;
	margin: 0 8px;
`;

const ImageContainer = styled.div`
	height: 228px;
	border-radius: 20px;
	overflow: hidden;
`;

const Image = styled.img`
	object-fit: cover;
`;

const FoodName = styled.p`
	font-family: "Poppins", sans-serif;
	font-size: 20px;
	color: #000000;
	margin-top: 12px;
	margin-bottom: 10px;
`;

const FoodDescription = styled.p`
	font-family: "Poppins", sans-serif;
	font-weight: 300;
	font-size: 14px;
	line-height: 24px;
	color: #000000;
`;

const ButtonGroup = styled.div`
	background-color: #000000;
	align-items: center;
	border-radius: 5px;
	overflow: hidden;
`;

const Button = styled.button`
	font-family: "Poppins", sans-serif;
	background-color: #000000;
	font-size: 12px;
	color: #ffffff;

	&:hover {
		color: #ffffff;
	}

	&:disabled {
		opacity: 1;
	}
`;

FoodCard.propTypes = {
	foodName: PropTypes.string.isRequired,
	foodImg: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
	foodDescription: PropTypes.string.isRequired,
	foodPrice: PropTypes.number.isRequired,
};

export default FoodCard;
