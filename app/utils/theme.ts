import {ColorPalette, Theme} from "../types/utils/theme";

/** Color palette of the app. @readonly */
const colorPalette: ColorPalette = {
	orange: "#E4793B",
	white: "#FFFFFF",
	gray: "#494D55",
	lightGray: "#AEB2BA",
	darkGray: "#2C3038"
};

/** Main theme of the app. @readonly */
export const theme: Theme = {
	colors: {
		background: colorPalette.gray,
		foreground: colorPalette.white,
		primary: colorPalette.darkGray,
		primaryLight: colorPalette.lightGray,
		accent: colorPalette.orange
	},
	spacing: {
		s: 8,
		m: 16,
		l: 24,
		xl: 40
	},
	textVariants: {
		header: {
			fontSize: 36,
			fontFamily: "Roboto",
			fontWeight: "medium"
		},
		body: {
			fontSize: 18,
			fontFamily: "Roboto",
			fontWeight: "regular"
		}
	}
};

/** Dark theme of the app. @readonly */
export const darkTheme: Theme = {
	...theme,
	colors: {
		...theme.colors,
		foreground: colorPalette.darkGray
	}
};
