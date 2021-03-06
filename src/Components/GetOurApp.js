/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import StoreCard from "./StoreCard";

const GetOurApp = () => {
	return (
		<div className="container mb-5">
			<div className="d-flex flex-column flex-md-row align-items-center justify-content-center">
				<div className="d-flex align-items-center mb-3 mb-md-0">
					<Bell className="d-flex align-items-center justify-content-center">
						<svg
							width={30}
							height={35}
							viewBox="0 0 30 35"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M15 0C11.59 0 8.31961 1.38281 5.90835 3.84422C3.4971 6.30564 2.14247 9.64403 2.14247 13.125V20.9694L0.62742 22.5159C0.327819 22.8219 0.123799 23.2116 0.0411516 23.6359C-0.0414957 24.0601 0.000940638 24.4999 0.163096 24.8996C0.325251 25.2992 0.599844 25.6408 0.952161 25.8812C1.30448 26.1216 1.7187 26.2499 2.14247 26.25H27.8575C28.2813 26.2499 28.6955 26.1216 29.0478 25.8812C29.4002 25.6408 29.6747 25.2992 29.8369 24.8996C29.9991 24.4999 30.0415 24.0601 29.9588 23.6359C29.8762 23.2116 29.6722 22.8219 29.3726 22.5159L27.8575 20.9694V13.125C27.8575 9.64403 26.5029 6.30564 24.0917 3.84422C21.6804 1.38281 18.41 0 15 0ZM15 35C13.295 35 11.6598 34.3086 10.4542 33.0779C9.24855 31.8472 8.57123 30.178 8.57123 28.4375H21.4288C21.4288 30.178 20.7515 31.8472 19.5458 33.0779C18.3402 34.3086 16.705 35 15 35Z"
								fill="white"
							/>
						</svg>
					</Bell>
					<Text className="mx-4 my-0">Get our App!</Text>
				</div>

				<div className="d-flex flex-column flex-md-row align-items-center">
					<StoreCard dark store="appstore" className="mb-3 mb-md-0 mr-md-4" />
					<StoreCard dark className="mb-0" />
				</div>
			</div>
		</div>
	);
};

const Bell = styled.div`
	width: 56px;
	height: 49px;

	background: #000000;
	border-radius: 8px;

	@media screen and (min-width: 992px) {
		width: 78px;
		height: 71px;
	}
`;

const Text = styled.p`
	font-family: "Poppins", sans-serif;
	font-style: normal;
	font-weight: 500;
	font-size: 20px;
	/* line-height: 72px; */
	color: #000000;

	@media screen and (min-width: 992px) {
		font-size: 38px;
	}
`;

export default GetOurApp;
