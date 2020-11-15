/**
 * External dependencies
 */
import React from "react";

/**
 * Internal dependencies
 */
import {
	HeroBannerSection,
	PopularSection,
	CategoriesSection,
	OffersSection,
} from "Components";

const App = () => {
	return (
		<div>
			<HeroBannerSection />
			<PopularSection />
			<CategoriesSection />
			<OffersSection />
		</div>
	);
};

export default App;
