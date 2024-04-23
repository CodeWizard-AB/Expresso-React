/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
	darkMode: "class",
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
				primaryForm: {
					50: "#eff6ff",
					100: "#dbeafe",
					200: "#bfdbfe",
					300: "#93c5fd",
					400: "#60a5fa",
					500: "#3b82f6",
					600: "#2563eb",
					700: "#1d4ed8",
					800: "#1e40af",
					900: "#1e3a8a",
					950: "#172554",
				},
			},
		},
	},
	plugins: [require("daisyui")],
};
