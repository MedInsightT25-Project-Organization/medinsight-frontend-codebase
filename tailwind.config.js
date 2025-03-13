/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
	theme: {
		extend: {
			colors: {
				primary: "#0055ED",
				darkPrimary: "#00225f",
				secondary: "#00AE36",
				darkSecondary: "#006820",
				accent: "#f1f9ff",
			},

			fontFamily: {
				workSans: ["Work Sans", "sans-serif"],
				poppins: ["Poppins", "sans-serif"],
			},
		},
	},
	plugins: [
		require("@tailwindcss/forms"),
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
	],
};
