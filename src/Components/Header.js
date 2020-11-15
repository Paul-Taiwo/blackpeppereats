/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";
import Button from "./Button";

const Header = () => {
	return (
		<Head className="position-absolute w-100">
			<div className="container-fluid">
				<div className="d-flex justify-content-between px-3">
					<BrandContainer className="d-flex flex-row-reverse flex-md-row justify-content-between align-items-center">
						<button type="button" className="btn mr-md-3">
							<svg
								width={20}
								height={16}
								viewBox="0 0 20 16"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 15H19M1 1H19H1ZM1 8H10H1Z"
									stroke="black"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						<div className="d-flex align-items-center">
							<div className="mr-2">
								<svg
									width={20}
									height={24}
									viewBox="0 0 20 24"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M10 0C7.72665 0 5.5464 0.948211 3.9389 2.63604C2.3314 4.32387 1.42831 6.61305 1.42831 9V14.379L0.41828 15.4395C0.218546 15.6493 0.0825326 15.9165 0.0274344 16.2075C-0.0276638 16.4984 0.000627092 16.7999 0.10873 17.074C0.216834 17.348 0.399896 17.5823 0.634774 17.7471C0.869653 17.9119 1.1458 17.9999 1.42831 18H18.5717C18.8542 17.9999 19.1303 17.9119 19.3652 17.7471C19.6001 17.5823 19.7832 17.348 19.8913 17.074C19.9994 16.7999 20.0277 16.4984 19.9726 16.2075C19.9175 15.9165 19.7815 15.6493 19.5817 15.4395L18.5717 14.379V9C18.5717 6.61305 17.6686 4.32387 16.0611 2.63604C14.4536 0.948211 12.2734 0 10 0ZM10 24C8.86332 24 7.7732 23.5259 6.96945 22.682C6.1657 21.8381 5.71416 20.6935 5.71416 19.5H14.2858C14.2858 20.6935 13.8343 21.8381 13.0306 22.682C12.2268 23.5259 11.1367 24 10 24Z"
										fill="black"
									/>
								</svg>
							</div>

							<Brand className="mb-0">Blackpeppereats</Brand>
						</div>
					</BrandContainer>

					<SignInButton
						type="button"
						className="btn d-none d-md-block"
						title="Sign in"
					/>
				</div>
			</div>
		</Head>
	);
};

const Head = styled.header`
	top: 0;
	z-index: 200;
	padding: 20px 0px;
`;

const SignInButton = styled(Button)`
	padding: 10px 34px;
`;

const BrandContainer = styled.div`
	width: 100%;

	@media screen and (min-width: 768px) {
		width: unset;
	}
`;

const Brand = styled.p`
	font-family: "Poppins", sans-serif;
	font-weight: bold;
	font-size: 20px;
	line-height: 48px;
	color: #000000;

	@media screen and (min-width: 1200px) {
		font-size: 30px;
	}
`;

export default Header;
