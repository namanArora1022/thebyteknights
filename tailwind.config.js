module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'Rancho': ['Rancho']
		},
		extend: {
			backgroundImage: theme => ({
				'home-landing': "url('/src/assets/home/landing.jpg')"
			}),
			colors: {
				'Pink' : '#ff0054'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}