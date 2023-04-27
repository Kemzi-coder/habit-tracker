import {Color} from "../../../shared/theme";
import {IconName, IconVariant} from "../../MyIcon";

type MyInputType = "password" | "text";

interface MyInputProps {
	startIconName: IconName;
	startIconColor?: Color;
	type?: MyInputType;
	startIconVariant?: IconVariant;
}

export type {MyInputProps, MyInputType};
