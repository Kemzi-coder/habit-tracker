import React, {FC} from "react";
import {Pressable, StyleProp, ViewStyle} from "react-native";
import {useThemeContext} from "contexts";
import {MyButtonProps} from "types/components/UI";
import MyText from "../MyText/MyText";
import styles from "./MyButton.styles";

const MyButton: FC<MyButtonProps> = ({
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
