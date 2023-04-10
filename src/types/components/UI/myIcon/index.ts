import {ViewProps} from "react-native/types";
import {Color, IconName, IconSize, IconVariant} from "types/theme";

export interface MyIconProps extends ViewProps {
	variant: IconVariant;
	name: IconName;
	size?: IconSize;
	color?: Color;
}
