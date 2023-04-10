import {Color, IconName, IconSize} from "types/theme";

export interface MyMenuButtonProps {
	isActive: boolean;
	iconName: IconName;
	iconSize?: IconSize;
	iconActiveColor?: Color;
	iconInactiveColor?: Color;
}
