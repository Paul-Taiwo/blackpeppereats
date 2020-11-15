/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

/**
 * Internal dependencies
 */
import Text from "./Text";
import OffersCard from "./OffersCard";
// import FoodCard from "./FoodCard";

const OffersSection = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: true,
	};

	return (
		<Section>
			<div className="container">
				<div className="row">
					<div className="d-flex align-items-center justify-content-between w-100 mb-4">
						<Text.Title text="Offers" />
					</div>
				</div>

				{/*  eslint-disable-next-line react/jsx-props-no-spreading */}
				<Slider {...settings}>
					{[...new Array(8).keys()].map(() => (
						<OffersCard />
					))}
				</Slider>
			</div>
		</Section>
	);
};

const Section = styled.section`
	padding-top: 66px;
	padding-bottom: 65px;
`;

export default OffersSection;
