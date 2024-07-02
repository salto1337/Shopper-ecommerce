/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"bg-hero": "linear-gradient(180deg, #fde1ff, #e1ffea22 60%)",
			},
			gridTemplateColumns: {
				"cart": "0.5fr 2fr 1fr 1fr 1fr 1fr",
				"mobile": "0.7fr 0.5fr 0.5fr 0.7fr 0.7fr 0.5fr",
			},
		},
	},
	plugins: [],
};
