module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			'Rancho': ['Rancho'],
			'Open-Sans': ['Open Sans'],
		},
		fontSize: {
			'7xl': '4rem'
		},
		extend: {
			backgroundImage: theme => ({
				'home-landing': "url('/src/assets/home/landing.jpg')"
			}),
			colors: {
				'Pink' : '#ff0054',
				'Black' : '#3F3D56'
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
