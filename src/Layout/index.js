/**
 * External dependencies
 */
import React from "react";
import PropTypes from "prop-types";

/**
 * Internal dependencies
 */
import { Footer } from "Components";

const Layout = ({ children }) => {
	return (
		<>
			{children}
			<Footer />
		</>
	);
};

Layout.propTypes = {
	children: PropTypes.element.isRequired,
};

export default Layout;
