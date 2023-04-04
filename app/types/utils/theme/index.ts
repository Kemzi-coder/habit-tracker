import {TextStyle} from "react-native";
import {
	ButtonSizes,
	ColorPalette,
	Colors,
	IconSizes,
	SpacingSizes,
	TextFonts,
	TextVariants
} from "../../../utils/constants/theme";

interface TextVariant {
	fontSize: number;
	fontFamily: TextFonts;
	textTransform: TextStyle["textTransform"];
}

interface IconSize {
	width: number;
	height: number;
	thickness: number;
}

interface ButtonSize {
	paddingVertical: number;
	paddingHorizontal: number;
	textVariant: TextVariants;
}

export interface Theme {
	colors: {
		[key in Colors]: ColorPalette;
	};
	spacing: {
		[key in SpacingSizes]: number;
	};
	iconSizes: {
		[key in IconSizes]: IconSize;
	};
	textVariants: {
		[key in TextVariants]: TextVariant;
	};
	buttonSizes: {
		[key in ButtonSizes]: ButtonSize;
	};
}
