import React, {FC} from "react";
import {Pressable} from "react-native";
import {useThemeContext} from "../../../contexts/themeContext";
import {MyButtonProps} from "../../../types/components/UI/myButton";
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

	const buttonStyle = [
		{
			paddingVertical,
			paddingHorizontal,
			backgroundColor: buttonBackgroundColor
		},
		styles.button
	];

	return (
		<Pressable style={buttonStyle} {...pressableProps}>
			<MyText text={text} variant={textVariant} />
		</Pressable>
	);
};

export default MyButton;
