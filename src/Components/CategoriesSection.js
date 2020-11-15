/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import { categories } from "utils/demoData";

/**
 * Internal dependencies
 */
import Button from "./Button";
import FoodCategoryCard from "./FoodCategoryCard";
import Text from "./Text";

const CategoriesSection = () => {
	return (
		<Section>
			<div className="container">
				<div className="d-flex align-items-center justify-content-between w-100 mb-4">
					<Text.Title text="Our Categories" />

					<SeeAllButton type="button" className="btn" title="See all" />
				</div>

				<div className="row">
					{[...categories].map(({ name, image }) => (
						<div className="col-12 col-md-6 col-lg-3 px-0 mb-3 mb-lg-0">
							<FoodCategoryCard
								key={name}
								categoryName={name}
								categoryImage={image}
							/>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
};

const Section = styled.section`
	padding-top: 66px;
	padding-bottom: 65px;
`;

const SeeAllButton = styled(Button)`
	font-size: 16px;

	@media screen and (min-width: 768px) {
		font-size: 22px;
	}
`;

export default CategoriesSection;
