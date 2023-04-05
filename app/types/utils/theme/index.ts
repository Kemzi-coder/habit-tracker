import {TextStyle} from "react-native";
import {ColorPalette, TextFonts} from "../../../utils/constants/theme";

export type SpacingSize = "s" | "m" | "l" | "xl";

export type IconSize = "s" | "m" | "l";

export type IconName = "email" | "lock" | "user";

export type IconVariant = "outline" | "solid";

export type TextVariant = "header" | "body" | "button" | "link";

export type ButtonSize = "l";

export type Color =
	| "background"
	| "foreground"
	| "text"
	| "primary"
	| "primaryLight"
	| "accent";

interface ITextVariant {
	fontSize: number;
	fontFamily: TextFonts;
	textTransform: TextStyle["textTransform"];
}

interface IIconSize {
	width: number;
	height: number;
	thickness: number;
}

interface IButtonSize {
	paddingVertical: number;
	paddingHorizontal: number;
	textVariant: TextVariant;
}

export interface Theme {
	colors: {
		[key in Color]: ColorPalette;
	};
	spacing: {
		[key in SpacingSize]: number;
	};
	iconSizes: {
		[key in IconSize]: IIconSize;
	};
	textVariants: {
		[key in TextVariant]: ITextVariant;
	};
	buttonSizes: {
		[key in ButtonSize]: IButtonSize;
	};
}
