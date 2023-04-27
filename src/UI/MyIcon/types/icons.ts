import {ColorValue} from "react-native";

interface IconProps {
	color: ColorValue;
	thickness: number;
	width: number;
	height: number;
}

type IconName =
	| "email"
	| "lock"
	| "user"
	| "home"
	| "plus"
	| "minus"
	| "play"
	| "pause"
	| "stop";

type IconVariant = "outline" | "solid";

export type {IconProps, IconVariant, IconName};
