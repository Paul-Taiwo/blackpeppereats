/**
 * External dependencies
 */
import React from "react";
import { components } from "react-select";

const SelectTimeControlComponent = (props) => {
	// eslint-disable-next-line react/prop-types
	const { children } = props;

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<components.Control {...props}>
			<div className="ml-3">
				<svg
					width={16}
					height={16}
					viewBox="0 0 16 16"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16ZM9 4C9 3.73478 8.89464 3.48043 8.70711 3.29289C8.51957 3.10536 8.26522 3 8 3C7.73478 3 7.48043 3.10536 7.29289 3.29289C7.10536 3.48043 7 3.73478 7 4V8C7.00006 8.26519 7.10545 8.51951 7.293 8.707L10.121 11.536C10.2139 11.6289 10.3242 11.7026 10.4456 11.7529C10.567 11.8032 10.6971 11.8291 10.8285 11.8291C10.9599 11.8291 11.09 11.8032 11.2114 11.7529C11.3328 11.7026 11.4431 11.6289 11.536 11.536C11.6289 11.4431 11.7026 11.3328 11.7529 11.2114C11.8032 11.09 11.8291 10.9599 11.8291 10.8285C11.8291 10.6971 11.8032 10.567 11.7529 10.4456C11.7026 10.3242 11.6289 10.2139 11.536 10.121L9 7.586V4Z"
						fill="black"
					/>
				</svg>
			</div>

			{children}
		</components.Control>
	);
};

export default SelectTimeControlComponent;
