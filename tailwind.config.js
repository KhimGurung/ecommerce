module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true
	},
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		container:{
			center: true,
			padding: {
				DEFAULT: "1rem",
				sm: '2rem',
				lg: '3rem',
				xl: '4rem'		
			}
		},
		extend: {},
	},
	variants: {},
	plugins: [
		require( 'tailwindcss' ),
		require( 'precss' ),
		require( 'autoprefixer' )
	]
}
