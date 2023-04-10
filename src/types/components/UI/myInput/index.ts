import {Color, IconName, IconVariant} from "types/theme";

export type MyInputType = "password" | "text";

export interface MyInputProps {
	startIconName: IconName;
	startIconColor?: Color;
	type?: MyInputType;
	startIconVariant?: IconVariant;
}
