import {Theme} from "../types/theme";

/** Color palette of the app. @readonly */
const enum ColorPalette {
	Orange = "#E4793B",
	White = "#FFFFFF",
	Gray = "#494D55",
	LightGray = "#AEB2BA",
	DarkGray = "#2C3038",
	DarkerGray = "#242830",
	Danger = "#e93c34"
}

const enum TextFonts {
	Medium = "Roboto-Medium",
	Regular = "Roboto-Regular"
}

/** Main theme of the app. @readonly */
const theme: Theme = {
	colors: {
		background: ColorPalette.Gray,
		backgroundLight: ColorPalette.LightGray,
		foreground: ColorPalette.White,
		text: ColorPalette.White,
		primaryDark: ColorPalette.DarkerGray,
		primary: ColorPalette.DarkGray,
		accent: ColorPalette.Orange,
		danger: ColorPalette.Danger
	},
	spacing: {
		s: 8,
		m: 16,
		l: 24,
		xl: 40
	},
	iconSizes: {
		s: {
			width: 18,
			height: 18,
			thickness: 1.3
		},
		m: {
			width: 28,
			height: 28,
			thickness: 1.3
		},
		l: {
			width: 38,
			height: 38,
			thickness: 1.3
		}
	},
	textVariants: {
		header: {
			fontSize: 36,
			fontFamily: TextFonts.Medium,
			textTransform: "none"
		},
		body: {
			fontSize: 16,
			fontFamily: TextFonts.Regular,
			textTransform: "none"
		},
		button: {
			fontSize: 16,
			fontFamily: TextFonts.Medium,
			textTransform: "uppercase"
		},
		link: {
			fontSize: 16,
			fontFamily: TextFonts.Medium,
			textTransform: "none"
		}
	},
	buttonSizes: {
		l: {
			paddingVertical: 16,
			paddingHorizontal: 40,
			textVariant: "button"
		}
	}
};

/** Dark theme of the app. @readonly */
const darkTheme: Theme = {
	...theme,
	colors: {
		...theme.colors,
		foreground: ColorPalette.DarkGray
	}
};

export {ColorPalette, TextFonts, theme, darkTheme};
