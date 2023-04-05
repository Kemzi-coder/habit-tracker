import {TextProps} from "react-native";
import {Color, TextVariant} from "../../utils/theme";

export interface MyTextProps extends TextProps {
	variant: TextVariant;
	text: string;
	color?: Color;
}
