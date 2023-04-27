import {Color, IconSize} from "../../../shared/theme";
import {IconName, IconVariant} from "./icons";

interface MyIconProps {
	variant: IconVariant;
	name: IconName;
	size?: IconSize;
	color?: Color;
}

export type {MyIconProps};
