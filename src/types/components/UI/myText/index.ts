import {TextProps} from "react-native";
import {Color, TextVariant} from "../../../theme";

export interface MyTextProps extends TextProps {
	variant: TextVariant;
	text: string;
	color?: Color;
}
