/**
 * External dependencies
 */
import React, { useEffect, useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import PropTypes from "prop-types";

/**
 * Internal dependencies
 */
import bgImage from "assets/images/modalImg.jpeg";
import Button from "./Button";
import SelectFoodControlComponent from "./SelectFoodControlComponent";

/**
 * Options for Select
 */
const options = [
	{ value: "chocolate", label: "Chocolate" },
	{ value: "strawberry", label: "Strawberry" },
	{ value: "vanilla", label: "Vanilla" },
];

/**
 *
 * @param {boolean} isActive should show modal
 * @param {function} closeHandler modal close handler
 */

const Modal = ({ isActive, closeHandler }) => {
	const [selectedOption, setSelectedOption] = useState(null);
	const [quantity, setQuantity] = useState(1);

	const handleChange = (selected) => {
		setSelectedOption(selected);
	};

	const add = () => setQuantity(quantity + 1);
	const subtract = () => setQuantity(quantity - 1);

	useEffect(() => {
		if (isActive) {
			document.querySelector("body").style.overflow = "hidden";
		}

		if (!isActive) {
			document.querySelector("body").style.overflow = "unset";
		}
	}, []);

	return (
		<BackDrop isActive={isActive}>
			<Card>
				<div className="container px-0">
					<div className="row">
						<div className="col-12 col-lg-6 px-0">
							<div className="d-flex flex-column h-100">
								<ImageContainer>
									<img src={bgImage} className="w-100 img-fluid" alt="Food" />
								</ImageContainer>

								<TextSection className="px-3 pt-3 pb-4 d-flex flex-column">
									<TextH3 className="text-white text-center">
										Spaghetti & Barbecue chicken
									</TextH3>
									<TextSubP>
										Gluten Free Cauliflower crust dough with our handcrafted
										tomato sauce, covered with a blend of fine cheeses.
									</TextSubP>

									<div className="d-flex justify-content-between align-items-center mt-auto">
										<Price className="mb-0">₦ 4,670.00 </Price>

										<div>
											<div className="d-flex align-items-center">
												<AddOrDescButton
													type="button"
													onClick={subtract}
													className="btn d-flex align-items-center justify-content-center"
												>
													<svg
														width={17}
														height={20}
														viewBox="0 0 17 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M0.422903 10.0088C0.422943 9.74368 0.528296 9.48938 0.715796 9.30188C0.903295 9.11439 1.15759 9.00903 1.42275 9.00899L7.49397 9.00899L7.49397 2.93777C7.49166 2.80501 7.51582 2.67311 7.56503 2.54979C7.61424 2.42646 7.68752 2.31416 7.7806 2.21946C7.87367 2.12475 7.98467 2.04953 8.10713 1.99819C8.22958 1.94684 8.36103 1.92039 8.49382 1.92039C8.6266 1.92039 8.75806 1.94684 8.88051 1.99819C9.00297 2.04953 9.11397 2.12475 9.20704 2.21946C9.30012 2.31416 9.3734 2.42646 9.42261 2.54978C9.47182 2.67311 9.49598 2.80501 9.49367 2.93777L9.49367 9.00899H15.5649C15.8271 9.01355 16.0769 9.12089 16.2607 9.3079C16.4445 9.49492 16.5475 9.74663 16.5475 10.0088C16.5475 10.271 16.4445 10.5228 16.2607 10.7098C16.0769 10.8968 15.8271 11.0041 15.5649 11.0087H9.49367V17.0799C9.48911 17.3421 9.38177 17.592 9.19475 17.7758C9.00774 17.9595 8.75603 18.0625 8.49382 18.0625C8.23161 18.0625 7.9799 17.9595 7.79288 17.7758C7.60587 17.592 7.49853 17.3421 7.49397 17.0799V11.0087L1.42275 11.0087C1.15759 11.0086 0.903295 10.9033 0.715796 10.7158C0.528296 10.5283 0.422943 10.274 0.422903 10.0088Z"
															fill="black"
														/>
														<rect x={5} width={7} height={9} fill="white" />
														<rect
															x={5}
															y={11}
															width={7}
															height={9}
															fill="white"
														/>
													</svg>
												</AddOrDescButton>
												<Count className="mx-2">{quantity}</Count>
												<AddOrDescButton
													type="button"
													onClick={add}
													className="btn d-flex align-items-center justify-content-center"
												>
													<svg
														width={17}
														height={18}
														viewBox="0 0 17 18"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															fillRule="evenodd"
															clipRule="evenodd"
															d="M0.422903 9.00884C0.422943 8.74368 0.528296 8.48938 0.715796 8.30188C0.903295 8.11439 1.15759 8.00903 1.42275 8.00899L7.49397 8.00899L7.49397 1.93777C7.49166 1.80501 7.51582 1.67311 7.56503 1.54979C7.61424 1.42646 7.68752 1.31416 7.7806 1.21946C7.87367 1.12475 7.98467 1.04953 8.10713 0.998186C8.22958 0.946839 8.36103 0.920395 8.49382 0.920394C8.6266 0.920394 8.75806 0.946839 8.88051 0.998186C9.00297 1.04953 9.11397 1.12475 9.20704 1.21946C9.30012 1.31416 9.3734 1.42646 9.42261 1.54978C9.47182 1.67311 9.49598 1.80501 9.49367 1.93777L9.49367 8.00899H15.5649C15.8271 8.01355 16.0769 8.12089 16.2607 8.3079C16.4445 8.49492 16.5475 8.74663 16.5475 9.00884C16.5475 9.27105 16.4445 9.52276 16.2607 9.70978C16.0769 9.89679 15.8271 10.0041 15.5649 10.0087H9.49367V16.0799C9.48911 16.3421 9.38177 16.592 9.19475 16.7758C9.00774 16.9595 8.75603 17.0625 8.49382 17.0625C8.23161 17.0625 7.9799 16.9595 7.79288 16.7758C7.60587 16.592 7.49853 16.3421 7.49397 16.0799V10.0087L1.42275 10.0087C1.15759 10.0086 0.903295 9.9033 0.715796 9.7158C0.528296 9.5283 0.422943 9.274 0.422903 9.00884Z"
															fill="black"
														/>
													</svg>
												</AddOrDescButton>
											</div>
										</div>
									</div>
								</TextSection>
							</div>
						</div>

						<div className="px-0 col-12 col-lg-6">
							<Sec className="bg-white d-flex flex-column h-100">
								<SecText>
									We need to confirm the availability of this meal from the
									Black pepper Annex closest to you.
								</SecText>

								<div className="w-100 mt-auto">
									<Select
										components={{ Control: SelectFoodControlComponent }}
										styles={{
											control: (provided) => ({
												...provided,
												border: "1px solid #000000",
												paddingTop: "5px",
												paddingBottom: "3px",
												width: "100%",
											}),
											singleValue: (provided) => ({
												...provided,
												fontSize: "14px",
												color: "#000000",
												fontFamily: `"Poppins", sans-serif`,
											}),
											placeholder: (provided) => ({
												...provided,
												fontSize: "14px",
												color: "#000000",
												fontFamily: `"Poppins", sans-serif`,
											}),
											indicatorSeparator: () => ({
												display: "none",
											}),
											dropdownIndicator: (provided) => ({
												...provided,
												color: "#000000",
											}),
										}}
										className="mb-3"
										value={selectedOption}
										onChange={handleChange}
										options={options}
										placeholder="Select Closest BlackBells to you"
									/>

									<Button
										className="w-100"
										title="Continue"
										onClick={closeHandler}
									/>
								</div>
							</Sec>
						</div>
					</div>
				</div>
			</Card>
		</BackDrop>
	);
};

const BackDrop = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	display: ${(props) => (props.isActive ? "block" : "none")};
	background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
`;

const Card = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 90%;
`;

const ImageContainer = styled.div`
	height: 60%;
`;

const TextSection = styled.div`
	height: 40%;
	background-color: #000000;
`;

const TextH3 = styled.h3`
	font-family: "Poppins", sans-serif;
	font-weight: 500;
	font-size: 22px;
	line-height: 34px;
	color: #ffffff;
`;

const TextSubP = styled.p`
	font-weight: 300;
	font-size: 14px;
	line-height: 157.2%;
	color: #ffffff;
	font-family: "Poppins", sans-serif;
`;

const Price = styled.p`
	font-weight: 600;
	font-size: 20px;
	line-height: 32px;
	color: #ffffff;
	font-family: "Poppins", sans-serif;
`;

const Count = styled.span`
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	color: #ffffff;
	font-family: "Poppins", sans-serif;
`;

const AddOrDescButton = styled.button`
	border-radius: 50%;
	height: 40px;
	width: 40px;
	background-color: #ffffff;
`;

const Sec = styled.div`
	padding: 86px 48px 68px;
`;

const SecText = styled.p`
	font-family: "Poppins", sans-serif;
	font-weight: 500;
	font-size: 24px;
	line-height: 36px;
	text-align: center;
	color: #000000;
	margin-bottom: 100px;
`;

Modal.propTypes = {
	isActive: PropTypes.bool.isRequired,
	closeHandler: PropTypes.func.isRequired,
};

export default Modal;
