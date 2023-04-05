import {PressableProps} from "react-native";

export interface MyLinkProps extends PressableProps {
	text: string;
	link?: string;
	color?: string;
}
