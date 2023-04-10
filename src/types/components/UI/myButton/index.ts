import {PressableProps} from "react-native";
import {ButtonSize, Color} from "types/theme";

export interface MyButtonProps extends PressableProps {
	text: string;
	size?: ButtonSize;
	backgroundColor?: Color;
}
