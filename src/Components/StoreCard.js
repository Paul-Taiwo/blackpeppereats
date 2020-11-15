/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 *
 * @param {string} className class name
 * @param {string} store One of appstore or playstore
 * @param {boolean} dark Return dark version of card
 */

const StoreCard = ({ className, store, dark }) => {
	const storeName = store === "appstore" ? "App" : "Play";

	return (
		<Card dark={dark} className={`d-flex align-items-center ${className}`}>
			<ImageContainer dark={dark} className="mr-1" />

			<div className="px-3">
				<CardTitle dark={dark} className="mb-0">
					Get on the
				</CardTitle>
				<StoreName dark={dark} className="mb-0">
					{storeName}store
				</StoreName>
			</div>
		</Card>
	);
};

const Card = styled.div`
	background: ${(props) => (props.dark ? "#000000" : "#dadada")};
	border-radius: 8px;
	padding: 10px 10px 15px;
`;

const CardTitle = styled.p`
	font-size: 12px;
	line-height: 108.3%;
	color: ${(props) => (props.dark ? "#F2F2F2" : "#000000")};
`;

const StoreName = styled.p`
	font-weight: 500;
	font-size: 24px;
	line-height: 108.3%;
	color: ${(props) => (props.dark ? "#F2F2F2" : "#000000")};
`;

const ImageContainer = styled.div`
	width: 35px;
	height: 35px;
	border-radius: 50%;
	background: ${(props) => (props.dark ? "#F2F2F2" : "#000000")};
`;

StoreCard.defaultProps = {
	className: "",
	dark: false,
};

StoreCard.propTypes = {
	className: PropTypes.string,
	store: PropTypes.oneOf(["appstore", "playstore"]).isRequired,
	dark: PropTypes.bool,
};

export default StoreCard;
