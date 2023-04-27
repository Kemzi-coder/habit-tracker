import React, {FC} from "react";
import {Pressable, PressableProps} from "react-native";
import {MyIcon} from "../../../MyIcon";
import {MyMenuButtonProps} from "../../types/myMenuButton";
/**
 * A reusable button component for MyMenu.
 * @component
 * @param {(import("types/components/UI/menu").MyMenuButtonProps | import("react-native").PressableProps)} props - Component props
 * @returns {JSX.Element} A Pressable component with an icon
 */
const MyMenuButton: FC<MyMenuButtonProps & PressableProps> = ({
	iconName,
	isActive,
	iconActiveColor,
	iconInactiveColor,
	iconSize,
	...pressableProps
}) => {
	const activeColor = iconActiveColor || "accent";

	const inactiveColor = iconInactiveColor || "backgroundLight";

	const size = iconSize || "l";

	return (
		<Pressable {...pressableProps}>
			<MyIcon
				color={isActive ? activeColor : inactiveColor}
				variant="solid"
				name={iconName}
				size={size}
			/>
		</Pressable>
	);
};

export default MyMenuButton;