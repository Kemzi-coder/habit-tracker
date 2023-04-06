import {TextStyle} from "react-native";
import {ColorPalette, TextFonts} from "../../utils/constants/theme";

type SpacingSize = "s" | "m" | "l" | "xl";

type IconSize = "s" | "m" | "l";

type IconName = "email" | "lock" | "user";

type IconVariant = "outline" | "solid";

type TextVariant = "header" | "body" | "button" | "link";

type ButtonSize = "l";

type Color =
	| "background"
	| "foreground"
	| "text"
	| "primary"
	| "primaryLight"
	| "accent"
	| "danger";

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

interface Theme {
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

export type {
	SpacingSize,
	ButtonSize,
	IconName,
	IconVariant,
	IconSize,
	TextVariant,
	Color,
	Theme
};
