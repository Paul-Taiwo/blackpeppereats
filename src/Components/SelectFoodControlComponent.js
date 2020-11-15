/**
 * External dependencies
 */
import React from "react";
import { components } from "react-select";

const SelectFoodControlComponent = (props) => {
	// eslint-disable-next-line react/prop-types
	const { children } = props;

	return (
		// eslint-disable-next-line react/jsx-props-no-spreading
		<components.Control {...props}>
			<div className="ml-3">
				<svg
					width={14}
					height={17}
					viewBox="0 0 14 17"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2.05051 2.05036C3.36333 0.737536 5.14389 0 7.0005 0C8.85711 0 10.6377 0.737536 11.9505 2.05036C13.2633 3.36318 14.0009 5.14375 14.0009 7.00036C14.0009 8.85697 13.2633 10.6375 11.9505 11.9504L7.0005 16.9004L2.05051 11.9504C1.40042 11.3003 0.884739 10.5286 0.532912 9.67931C0.181084 8.82998 0 7.91967 0 7.00036C0 6.08104 0.181084 5.17073 0.532912 4.32141C0.884739 3.47208 1.40042 2.70038 2.05051 2.05036ZM7.0005 9.00036C7.53094 9.00036 8.03965 8.78964 8.41472 8.41457C8.78979 8.0395 9.00051 7.53079 9.00051 7.00036C9.00051 6.46992 8.78979 5.96122 8.41472 5.58614C8.03965 5.21107 7.53094 5.00036 7.0005 5.00036C6.47007 5.00036 5.96136 5.21107 5.58629 5.58614C5.21122 5.96122 5.0005 6.46992 5.0005 7.00036C5.0005 7.53079 5.21122 8.0395 5.58629 8.41457C5.96136 8.78964 6.47007 9.00036 7.0005 9.00036Z"
						fill="black"
					/>
				</svg>
			</div>

			{children}
		</components.Control>
	);
};

export default SelectFoodControlComponent;
