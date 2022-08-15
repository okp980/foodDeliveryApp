/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				poppinsLight: ["Poppins-Light"],
				poppinsRegular: ["Poppins-Regular"],
				poppinsMedium: ["Poppins-Medium"],
				poppinsBold: ["Poppins-Bold"],
				poppinsSemiBold: ["Poppins-SemiBold"],
			},
		},
	},
	plugins: [],
};
