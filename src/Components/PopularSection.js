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
import FoodCard from "./FoodCard";
import SliderNextPrevButton from "./SliderNextPrevButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularSection = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		// centerMode: true,
	};

	return (
		<Section>
			<div className="container">
				<div className="row">
					<div className="d-flex align-items-center justify-content-between w-100 mb-4">
						<Text.Title text="What’s Popular?" />
						<SliderNextPrevButton />
					</div>

					{/*  eslint-disable-next-line react/jsx-props-no-spreading */}
					<Slider {...settings}>
						{[...new Array(8).keys()].map(() => (
							<FoodCard />
						))}
					</Slider>
				</div>
			</div>
		</Section>
	);
};

const Section = styled.section`
	padding-top: 66px;
	padding-bottom: 65px;
`;

export default PopularSection;
