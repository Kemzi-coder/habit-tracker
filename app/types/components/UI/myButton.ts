import {PressableProps} from "react-native";
import {ButtonSize, Color} from "../../utils/theme";

export interface MyButtonProps extends PressableProps {
	text: string;
	size: ButtonSize;
	backgroundColor?: Color;
}
