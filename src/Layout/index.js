/**
 * External dependencies
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Internal dependencies
 */
import { Header, Footer } from "Components";

const Layout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Layout;
