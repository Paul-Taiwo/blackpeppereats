/**
 * External dependencies
 */
import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import PropTypes from "prop-types";

/**
 * Internal dependencies
 */
import { popularFoods } from "utils/demoData";
import Text from "./Text";
import FoodCard from "./FoodCard";
import SliderNextPrevButton from "./SliderNextPrevButton";

/**
 * @param {boolean} showTitle Whether to show the top bar or not
 */

const PopularSection = ({ showTitle }) => {
	const ref = useRef();

	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<Section className={!showTitle ? "pt-0" : ""}>
			<div className="container">
				{showTitle && (
					<div className="d-flex align-items-center justify-content-between w-100 mb-4">
						<Text.Title text="What’s Popular?" />
						<SliderNextPrevButton sliderRef={ref} />
					</div>
				)}
				<div className="row">
					<Slider
						ref={(c) => {
							ref.current = c;
						}}
						//  eslint-disable-next-line react/jsx-props-no-spreading
						{...settings}
					>
						{[...popularFoods].map(({ name, description, image, price }) => (
							<FoodCard
								key={name}
								foodName={name}
								foodImg={image}
								foodPrice={price}
								foodDescription={description}
							/>
						))}
					</Slider>
				</div>
			</div>
		</Section>
	);
};

const Section = styled.section`
	padding-top: 56px;
	padding-bottom: 55px;
	overflow-x: hidden;
`;

PopularSection.defaultProps = {
	showTitle: true,
};

PopularSection.propTypes = {
	showTitle: PropTypes.bool,
};

export default PopularSection;
