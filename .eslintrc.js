module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: "module",
	},
	plugins: ["react"],
	rules: {
		"react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
	},
	settings: {
		"import/resolver": {
			node: {
				paths: ["./src"],
			},
		},
	},
};