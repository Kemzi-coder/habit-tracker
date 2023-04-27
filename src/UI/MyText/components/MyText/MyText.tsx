import React, {FC} from "react";
import {Text, TextProps} from "react-native";
import {useThemeContext} from "../../../../shared/theme";
import {MyTextProps} from "../../types/myText";

/**
	A custom Text component.
	@component
	@param {(import("types/components/UI").MyTextProps | import("react-native").TextProps)} props - Component props
	@returns {JSX.Element} Text component
*/
const MyText: FC<MyTextProps & TextProps> = ({
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
