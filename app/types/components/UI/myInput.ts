import {Color, IconName, IconVariant} from "../../utils/theme";

type MyInputType = "password" | "text";

export interface MyInputProps {
	startIconName: IconName;
	startIconColor: Color;
	startIconThickness: number;
	type?: MyInputType;
	startIconVariant?: IconVariant;
}
