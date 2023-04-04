import {Theme} from "../../types/utils/theme";
import {
	ButtonSizes,
	ColorPalette,
	Colors,
	IconSizes,
	SpacingSizes,
	TextFonts,
	TextVariants
} from "../constants/theme";

/** Main theme of the app. @readonly */
export const theme: Theme = {
	colors: {
		[Colors.Background]: ColorPalette.Gray,
		[Colors.Foreground]: ColorPalette.White,
		[Colors.Text]: ColorPalette.White,
		[Colors.Primary]: ColorPalette.DarkGray,
		[Colors.PrimaryLight]: ColorPalette.LightGray,
		[Colors.Accent]: ColorPalette.Orange
	},
	spacing: {
		[SpacingSizes.S]: 8,
		[SpacingSizes.M]: 16,
		[SpacingSizes.L]: 24,
		[SpacingSizes.XL]: 40
	},
	iconSizes: {
		[IconSizes.S]: {
			width: 18,
			height: 18,
			thickness: 1.3
		},
		[IconSizes.M]: {
			width: 28,
			height: 28,
			thickness: 1.3
		},
		[IconSizes.L]: {
			width: 38,
			height: 38,
			thickness: 1.3
		}
	},
	textVariants: {
		[TextVariants.Header]: {
			fontSize: 36,
			fontFamily: TextFonts.RobotoMedium,
			textTransform: "none"
		},
		[TextVariants.Body]: {
			fontSize: 16,
			fontFamily: TextFonts.RobotoRegular,
			textTransform: "none"
		},
		[TextVariants.Button]: {
			fontSize: 16,
			fontFamily: TextFonts.RobotoMedium,
			textTransform: "uppercase"
		}
	},
	buttonSizes: {
		[ButtonSizes.L]: {
			paddingVertical: 16,
			paddingHorizontal: 40,
			textVariant: TextVariants.Button
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
