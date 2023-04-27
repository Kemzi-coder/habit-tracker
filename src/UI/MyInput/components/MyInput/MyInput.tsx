import React, {FC} from "react";
import {TextInput, TextInputProps, View} from "react-native";
import {useThemeContext} from "../../../../shared/theme";
import MyIcon from "../../../MyIcon/components/MyIcon/MyIcon";
import {MyInputProps} from "../../types/myInput";
import styles from "./MyInput.styles";

/**
 * A customizable input field component with an optional icon on the start.
 * @component
 * @param {(import("react-native").TextInputProps | import("types/components/UI").MyInputProps)} props - Component props
 * @return {JSX.Element} View component
 */
const MyInput: FC<MyInputProps & TextInputProps> = ({
	style,
	startIconName,
	startIconColor,
	startIconVariant,
	type,
	...textInputProps
}) => {
	const theme = useThemeContext();
	const iconVariant = startIconVariant || "outline";

	// Input style dependent on the current theme
	const inputStyle = {
		paddingVertical: theme.spacing.m,
		paddingLeft: theme.iconSizes.s.width + theme.spacing.m * 2,
		paddingRight: theme.spacing.m,
		backgroundColor: theme.colors.primary,
		color: theme.colors.text,
		...theme.textVariants.body
	};

	return (
		<View>
			<TextInput
				secureTextEntry={type === "password"}
				cursorColor={theme.colors.foreground}
				style={[inputStyle, styles.input, style]}
				placeholderTextColor={theme.colors.backgroundLight}
				{...textInputProps}
			/>
			{/* Icon on the start of the input field */}
			<MyIcon
				name={startIconName}
				color={startIconColor}
				size="s"
				variant={iconVariant}
				style={[{paddingLeft: theme.spacing.m}, styles.icon]}
			/>
		</View>
	);
};

export default MyInput;
