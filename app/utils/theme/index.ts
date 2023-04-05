import {Theme} from "../../types/utils/theme";
import {ColorPalette, TextFonts} from "../constants/theme";

/** Main theme of the app. @readonly */
export const theme: Theme = {
	colors: {
		background: ColorPalette.Gray,
		foreground: ColorPalette.White,
		text: ColorPalette.White,
		primary: ColorPalette.DarkGray,
		primaryLight: ColorPalette.LightGray,
		accent: ColorPalette.Orange
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
export const darkTheme: Theme = {
	...theme,
	colors: {
		...theme.colors,
		foreground: ColorPalette.DarkGray
	}
};
