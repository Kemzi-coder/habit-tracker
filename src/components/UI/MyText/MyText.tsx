import React, {FC} from "react";
import {Text} from "react-native";
import {useThemeContext} from "contexts";
import {MyTextProps} from "types/components/UI";

const MyText: FC<MyTextProps> = ({
	variant,
	text,
	color,
	style,
	...textProps
}) => {
	const theme = useThemeContext();
	const textVariant = variant
		? theme.textVariants[variant]
		: theme.textVariants.body;
	const textColor = color ? theme.colors[color] : theme.colors.text;

	const {fontFamily, fontSize, textTransform} = textVariant;

	const textStyle = [
		{fontFamily, fontSize, textTransform, color: textColor},
		style
	];

	return (
		<Text style={textStyle} {...textProps}>
			{text}
		</Text>
	);
};

export default MyText;
