import React, {FC} from "react";
import {Pressable, PressableProps, StyleProp, ViewStyle} from "react-native";
import {useThemeContext} from "../../../../shared/theme";
import MyText from "../../../MyText/components/MyText/MyText";
import styles from "./MyButton.styles";
import {MyButtonProps} from "../../types/myButton";

/**
 * Custom button component.
 * @component
 * @param {(import("types/components/UI").MyButtonProps | import("react-native").PressableProps)} props - Component props
 * @return {JSX.Element} Pressable component
 */
const MyButton: FC<MyButtonProps & PressableProps> = ({
	text,
	size,
	style,
	backgroundColor,
	...pressableProps
}) => {
	const theme = useThemeContext();
	const buttonSize = size ? theme.buttonSizes[size] : theme.buttonSizes.l;
	const buttonBackgroundColor = backgroundColor
		? theme.colors[backgroundColor]
		: theme.colors.accent;

	const {paddingVertical, paddingHorizontal, textVariant} = buttonSize;

	const buttonStyle: StyleProp<ViewStyle> = [
		{
			paddingVertical,
			paddingHorizontal,
			backgroundColor: buttonBackgroundColor
		},
		styles.button,
		style as StyleProp<ViewStyle>
	];

	return (
		<Pressable style={buttonStyle} {...pressableProps}>
			<MyText text={text} variant={textVariant} />
		</Pressable>
	);
};

export default MyButton;
