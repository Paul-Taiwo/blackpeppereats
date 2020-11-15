/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

/**
 * Internal dependencies
 */
import bgImage from "assets/images/footerBg.svg";
import StoreCard from "./StoreCard";

const Footer = () => {
	return (
		<Footeer className="position-relative">
			<div className="container">
				<div className="d-flex flex-column flex-lg-row justify-content-between">
					<FooterTitle className="mb-4">Blackpeppereats</FooterTitle>
					<div className="d-flex flex-column flex-lg-row align-items-center">
						<StoreCard store="appstore" className="mb-3 mb-lg-0 mr-lg-3" />
						<StoreCard className="" />
					</div>
				</div>

				<FooterSec className="d-flex flex-column flex-md-row align-items-center justify-content-between">
					<p className="text-white mb-0">© 2020 Blackpepper</p>

					<div className="d-flex">
						<p className="text-white mx-3 mb-lg-0">Legal</p>
						<p className="text-white mx-3 mb-lg-0">Legal</p>
						<p className="text-white mx-3 mb-lg-0">Legal</p>
					</div>

					<div className="d-flex">
						<button type="button" className="btn">
							<svg
								width={12}
								height={21}
								viewBox="0 0 12 21"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M11.0035 0.460938H8.00255C6.67604 0.460938 5.40387 0.981996 4.46589 1.90949C3.52791 2.83698 3.00096 4.09492 3.00096 5.40659V8.37398H0V12.3305H3.00096V20.2435H7.00223V12.3305H10.0032L11.0035 8.37398H7.00223V5.40659C7.00223 5.14426 7.10762 4.89267 7.29522 4.70717C7.48281 4.52167 7.73725 4.41746 8.00255 4.41746H11.0035V0.460938Z"
									fill="#F2F2F2"
								/>
							</svg>
						</button>

						<button type="button" className="btn">
							<svg
								width={23}
								height={19}
								viewBox="0 0 23 19"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M22.1774 0.504819C21.2195 1.17295 20.1589 1.68397 19.0364 2.01819C18.434 1.33323 17.6333 0.847743 16.7427 0.627399C15.8521 0.407054 14.9146 0.46248 14.0569 0.786181C13.1992 1.10988 12.4628 1.68624 11.9471 2.4373C11.4315 3.18836 11.1616 4.07789 11.1739 4.98558V5.97471C9.41599 6.01978 7.67407 5.63426 6.10331 4.85249C4.53254 4.07071 3.18169 2.91695 2.17105 1.49395C2.17105 1.49395 -1.83023 10.3961 7.17264 14.3526C5.11251 15.7354 2.65836 16.4288 0.17041 16.3309C9.17328 21.2766 20.1768 16.3309 20.1768 4.95591C20.1759 4.68039 20.1491 4.40555 20.0968 4.13493C21.1177 3.13936 21.8381 1.88239 22.1774 0.504819Z"
									fill="white"
								/>
							</svg>
						</button>

						<button type="button" className="btn">
							<svg
								width={23}
								height={23}
								viewBox="0 0 23 23"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M16.7274 1.46094H6.72425C3.96195 1.46094 1.72266 3.67518 1.72266 6.40659V16.2979C1.72266 19.0293 3.96195 21.2435 6.72425 21.2435H16.7274C19.4897 21.2435 21.729 19.0293 21.729 16.2979V6.40659C21.729 3.67518 19.4897 1.46094 16.7274 1.46094Z"
									stroke="#F2F2F2"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M15.7271 10.729C15.8505 11.5522 15.7083 12.3929 15.3207 13.1316C14.9331 13.8702 14.3198 14.4693 13.568 14.8434C12.8163 15.2176 11.9643 15.3478 11.1334 15.2156C10.3025 15.0834 9.53488 14.6954 8.93977 14.107C8.34466 13.5185 7.95235 12.7595 7.81864 11.9379C7.68494 11.1162 7.81664 10.2738 8.19502 9.5305C8.5734 8.78715 9.1792 8.1807 9.92623 7.79741C10.6733 7.41412 11.5235 7.27351 12.356 7.39558C13.2052 7.5201 13.9914 7.91138 14.5984 8.51163C15.2055 9.11187 15.6012 9.88926 15.7271 10.729Z"
									stroke="#F2F2F2"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M17.2275 5.91211H17.2375"
									stroke="#F2F2F2"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>

						<button type="button" className="btn">
							<svg
								width={23}
								height={17}
								viewBox="0 0 23 17"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M21.5919 3.34536C21.473 2.87592 21.231 2.44581 20.8903 2.09846C20.5496 1.75112 20.1222 1.49883 19.6513 1.3671C17.9307 0.95166 11.0485 0.95166 11.0485 0.95166C11.0485 0.95166 4.16632 0.95166 2.44577 1.40666C1.97487 1.5384 1.54746 1.79068 1.20672 2.13803C0.865983 2.48538 0.623978 2.91549 0.505152 3.38492C0.190266 5.1115 0.0362386 6.86301 0.0450054 8.61742C0.0337811 10.385 0.187819 12.1499 0.505152 13.8895C0.636153 14.3443 0.883579 14.7581 1.22352 15.0908C1.56347 15.4234 1.98444 15.6638 2.44577 15.7886C4.16632 16.2436 11.0485 16.2436 11.0485 16.2436C11.0485 16.2436 17.9307 16.2436 19.6513 15.7886C20.1222 15.6569 20.5496 15.4046 20.8903 15.0572C21.231 14.7099 21.473 14.2798 21.5919 13.8104C21.9043 12.0968 22.0583 10.3586 22.052 8.61742C22.0632 6.8498 21.9092 5.08494 21.5919 3.34536Z"
									fill="#F2F2F2"
								/>
								<path
									d="M8.79785 11.852L14.5497 8.61751L8.79785 5.38306V11.852Z"
									fill="#333333"
								/>
							</svg>
						</button>
					</div>
				</FooterSec>
			</div>
		</Footeer>
	);
};

const Footeer = styled.footer`
	padding-top: 54px;
	padding-bottom: 76px;
	background: linear-gradient(rgba(67, 67, 67, 0.4), rgba(67, 67, 67, 0.4)),
		url(${bgImage});
	background-color: #000000;
	margin-top: 40px;
`;

const FooterSec = styled.div`
	margin-top: 68px;
`;

const FooterTitle = styled.h2`
	font-family: "Poppins", sans-serif;
	font-style: normal;
	font-weight: bold;
	font-size: 32px;
	line-height: 48px;
	color: #f2f2f2;
`;

export default Footer;
