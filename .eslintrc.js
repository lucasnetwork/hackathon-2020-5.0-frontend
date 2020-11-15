module.exports = {
	env: {
		es2021: true,
	},
	extends: ['plugin:react/recommended', 'airbnb', 'prettier', 'prettier/react'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['react', 'prettier'],
	rules: {
		'prettier/prettier': ['error', { endOfLine: 'auto' }],
		'react/jsx-filename-extension': ['warn', { extensions: ['js', 'jsx'] }],
		'react/jsx-props-no-spreading': 'off',
	},
};
