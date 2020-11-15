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
	GetOurApp,
} from "Components";
import Layout from "Layout";

const App = () => {
	return (
		<Layout>
			<HeroBannerSection />
			<PopularSection />
			<CategoriesSection />
			<GetOurApp />
			<OffersSection />
			<PopularSection showTitle={false} />
		</Layout>
	);
};

export default App;
