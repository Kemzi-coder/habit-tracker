import {Color, IconSize} from "../../../shared/theme";
import {IconName, IconVariant} from "../../MyIcon";

interface WidgetButtonProps {
	backgroundColor?: Color;
	iconName: IconName;
	iconColor?: Color;
	iconVariant: IconVariant;
	iconSize?: IconSize;
}

export type {WidgetButtonProps};
