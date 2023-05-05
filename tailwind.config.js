/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				black: "#131B23",
				primary: "#E86A33",
				background: "#fff0ea",
			},
		},
	},
	plugins: [require("@tailwindcss/forms")],
};
