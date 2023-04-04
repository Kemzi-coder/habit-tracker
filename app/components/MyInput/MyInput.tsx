import React, {FC} from "react";
import {TextInput, TextInputProps, View} from "react-native";
import {useThemeContext} from "../../contexts/themeContext";
import {MyInputProps} from "../../types/components/myInput";
import {IconSizes} from "../../utils/constants/theme";
import MyIcon from "../MyIcon/MyIcon";
import styles from "./MyInput.styles";
import {IconVariants} from "../../utils/constants/icons";

/** Custom text input component. */
const MyInput: FC<MyInputProps & TextInputProps> = ({
	style,
	startIconName,
	startIconColor,
	startIconThickness,
	startIconVariant,
	type,
	...textInputProps
}) => {
	const theme = useThemeContext();
	const iconVariant = startIconVariant || IconVariants.Outline;

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
				placeholderTextColor={theme.colors.primaryLight}
				{...textInputProps}
			/>
			{/* Icon on the start of the input field */}
			<MyIcon
				name={startIconName}
				color={startIconColor}
				size={IconSizes.S}
				variant={iconVariant}
				style={[{paddingLeft: theme.spacing.m}, styles.icon]}
			/>
		</View>
	);
};

export default MyInput;
