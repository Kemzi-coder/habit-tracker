import {Color, IconSize} from "../../../shared/theme";
import {IconName} from "../../MyIcon";

interface MyMenuButtonProps {
	isActive: boolean;
	iconName: IconName;
	iconSize?: IconSize;
	iconActiveColor?: Color;
	iconInactiveColor?: Color;
}

export type {MyMenuButtonProps};
