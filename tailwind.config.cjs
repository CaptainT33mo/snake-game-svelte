/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				white: '#ffffff',
				black: '#000000',
				primary1: '#01080E',
				primary2: '#011627',
				primary3: '#011221',
				'secondary-gray': '#607B96',
				'secondary-green': '#3C9D93',
				'secondary-blue': '#4D5BCE',
				'accent-orange': '#FEA55F',
				'accent-green': '#43D9AD',
				'accent-red': '#E99287',
				'accent-purple': '#C98BDF',
				line: '#1E2D3D'
			}
		}
	},
	plugins: []
};
