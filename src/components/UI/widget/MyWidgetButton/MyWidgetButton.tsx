import {MyIcon} from "components/UI";
import {useThemeContext} from "contexts/themeContext";
import React, {FC} from "react";
import {Pressable, PressableProps, StyleProp, ViewStyle} from "react-native";
import {MyWidgetButtonProps} from "types/components/UI/widget";
import styles from "./MyWidgetButton.styles";

const MyWidgetButton: FC<MyWidgetButtonProps & PressableProps> = ({
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

export default MyWidgetButton;
