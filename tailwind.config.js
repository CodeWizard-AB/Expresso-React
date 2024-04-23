/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				rancho: ['"Rancho", cursive'],
				raleway: ['"Raleway", sans-serif'],
			},
			colors: {
				new: "#f4f3f0",
				font1: "#374151",
				font2: "#331a15",
				button: "#d2b48c",
			},
		},
	},
	plugins: [require("daisyui")],
};
