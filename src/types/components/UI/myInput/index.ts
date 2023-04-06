import {Color, IconName, IconVariant} from "../../../theme";

export type MyInputType = "password" | "text";

export interface MyInputProps {
	startIconName: IconName;
	startIconColor: Color;
	startIconThickness: number;
	type?: MyInputType;
	startIconVariant?: IconVariant;
}
