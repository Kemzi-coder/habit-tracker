import {GestureResponderEvent} from "react-native";
import {Color} from "../../../shared/theme";
import {MyMenuButtonProps} from "./myMenuButton";

interface MyMenuListButton extends MyMenuButtonProps {
	id: number | string;
}

interface MyMenuProps {
	backgroundColor?: Color;
	onCentralButtonPress?: (e: GestureResponderEvent) => void;
	withCentralButton?: boolean;
	leftButtonList?: MyMenuListButton[];
	rightButtonList?: MyMenuListButton[];
}

export type {MyMenuListButton, MyMenuProps};
