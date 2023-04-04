import {TextProps} from "react-native";
import {Colors, TextVariants} from "../../utils/constants/theme";

export interface MyTextProps extends TextProps {
	variant: TextVariants;
	text: string;
	color?: Colors;
}
