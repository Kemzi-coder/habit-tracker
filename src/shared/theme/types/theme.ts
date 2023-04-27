import {TextStyle} from "react-native";
import type {ColorPalette, TextFonts} from "../constants/theme";

type IconSize = "s" | "m" | "l";

type SpacingSize = "s" | "m" | "l" | "xl";

type TextVariant = "header" | "body" | "button" | "link";

type ButtonSize = "l";

type Color =
	| "background"
	| "backgroundLight"
	| "foreground"
	| "text"
	| "primaryDark"
	| "primary"
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

type ThemeContextValue = Theme;

type ThemeContextHook = () => ThemeContextValue;

export type {
	IconSize,
	TextVariant,
	SpacingSize,
	ButtonSize,
	Color,
	Theme,
	ThemeContextHook,
	ThemeContextValue
};
