import {GestureResponderEvent} from "react-native";
import {Color} from "types/theme";
import {MyMenuButtonProps} from "../myMenuButton";

export interface MyMenuListButton extends MyMenuButtonProps {
	id: number | string;
}

export interface MyMenuProps {
	backgroundColor?: Color;
	onCentralButtonPress?: (e: GestureResponderEvent) => void;
	withCentralButton?: boolean;
	leftButtonList?: MyMenuListButton[];
	rightButtonList?: MyMenuListButton[];
}
