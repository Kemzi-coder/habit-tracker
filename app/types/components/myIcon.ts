import {ViewProps} from "react-native/types";
import {IconName, IconProps} from "../icons";

export type MyIconVariant = "outline" | "solid";

export interface MyIconProps extends IconProps, ViewProps {
	variant: MyIconVariant;
	name: IconName;
}
