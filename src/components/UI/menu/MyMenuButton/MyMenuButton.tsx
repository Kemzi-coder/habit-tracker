import React, {FC} from "react";
import {Pressable, PressableProps} from "react-native";
import {MyMenuButtonProps} from "types/components/UI/menu";
import MyIcon from "../../MyIcon/MyIcon";

const MyMenuButton: FC<MyMenuButtonProps & PressableProps> = ({
	iconName,
	isActive,
	iconActiveColor,
	iconInactiveColor,
	iconSize,
	...pressableProps
}) => {
	const activeColor = iconActiveColor || "accent";

	const inactiveColor = iconInactiveColor || "primaryLight";

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
