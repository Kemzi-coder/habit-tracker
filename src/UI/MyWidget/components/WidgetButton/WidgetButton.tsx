import React, {FC} from "react";
import {Pressable, PressableProps, StyleProp, ViewStyle} from "react-native";
import styles from "./WidgetButton.styles";
import {useThemeContext} from "../../../../shared/theme";
import {MyIcon} from "../../../MyIcon";
import {WidgetButtonProps} from "../../types/widgetButton";

/**
	A reusable button component that renders an icon and provides feedback to user interactions.
	@component
	@param {(import("types/components/layouts").WidgetButtonProps | import("react-native").PressableProps)} props - Component props
	@returns {JSX.Element} Pressable component with MyIcon component inside
*/
const WidgetButton: FC<WidgetButtonProps & PressableProps> = ({
	backgroundColor,
	iconColor,
	iconName,
	iconVariant,
	iconSize,
	style,
	...pressableProps
}) => {
	const theme = useThemeContext();
	const buttonColor = backgroundColor
		? theme.colors[backgroundColor]
		: theme.colors.accent;

	const buttonStyle: StyleProp<ViewStyle> = [
		styles.button,
		{
			backgroundColor: buttonColor
		},
		style as StyleProp<ViewStyle>
	];

	return (
		<Pressable style={buttonStyle} {...pressableProps}>
			<MyIcon
				name={iconName}
				color={iconColor}
				variant={iconVariant}
				size={iconSize}
			/>
		</Pressable>
	);
};

export default WidgetButton;
