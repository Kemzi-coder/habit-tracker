import {GestureResponderEvent, ViewProps} from "react-native";
import {Color} from "types/theme";
import {MyMenuButtonProps} from "../myMenuButton";

export interface MyMenuListButton extends MyMenuButtonProps {
	id: number | string;
}

export interface MyMenuProps extends ViewProps {
	backgroundColor?: Color;
	onCentralButtonPress?: (e: GestureResponderEvent) => void;
	withCentralButton?: boolean;
	leftButtonList?: MyMenuListButton[];
	rightButtonList?: MyMenuListButton[];
}
