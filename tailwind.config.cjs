/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				nunito: ['Nunito Sans', 'sans-serif']
			},
			fontSize: {
				xxs: ".625rem",
			}
		},
	},
	plugins: [],
}
