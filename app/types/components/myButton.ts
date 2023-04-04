import {PressableProps} from "react-native";
import {ButtonSizes, Colors} from "../../utils/constants/theme";

export interface MyButtonProps extends PressableProps {
	text: string;
	size: ButtonSizes;
	backgroundColor?: Colors;
}
