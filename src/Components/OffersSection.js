/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Slider from "react-slick";

/**
 * Internal dependencies
 */
import { offers } from "utils/demoData";
import Text from "./Text";
import OffersCard from "./OffersCard";

const OffersSection = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: true,
		autoplay: true,
	};

	return (
		<Section>
			<div className="container">
				<div className="d-flex align-items-center justify-content-between w-100 mb-4">
					<Text.Title text="Offers" />
				</div>
			</div>

			<div className="row">
				<div className="container-fluid">
					{/*  eslint-disable-next-line react/jsx-props-no-spreading */}
					<Slider {...settings}>
						{[...offers].map(({ name, image }) => (
							<OffersCard offerName={name} offerImage={image} />
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

export default OffersSection;
