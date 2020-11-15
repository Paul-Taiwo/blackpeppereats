const currencyFormatter = (number) =>
	new Intl.NumberFormat("en-NG", {
		style: "currency",
		currency: "NGN",
		currencySign: "accounting",
	}).format(number);

export default currencyFormatter;
