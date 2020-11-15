/**
 * External dependencies
 */
import React from "react";
import styled from "styled-components";

const SliderNextPrevButton = () => {
	return (
		<div className="d-flex justify-content-center position-relative">
			<Button
				type="button"
				className="btn mr-3 d-flex align-items-center justify-content-center"
				// onClick={() => sliderRef.current.slickPrev()}
			>
				<div className="mt-n1">
					<svg
						width={20}
						height={16}
						viewBox="0 0 20 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M1 8H19M8 15L1 8L8 15ZM1 8L8 1L1 8Z"
							stroke="white"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</Button>

			<Button
				type="button"
				className="btn"
				// onClick={() => sliderRef.current.slickNext()}
			>
				<div className="mt-n1">
					<svg
						width={20}
						height={16}
						viewBox="0 0 20 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M19 8L1 8M12 0.999999L19 8L12 0.999999ZM19 8L12 15L19 8Z"
							stroke="white"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round"
						/>
					</svg>
				</div>
			</Button>
		</div>
	);
};

const Button = styled.button`
	background: #000000;
	border-radius: 50%;
	height: 50px;
	width: 50px;
`;

export default SliderNextPrevButton;
