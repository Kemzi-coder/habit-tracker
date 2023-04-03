import React, {FC} from "react";
import {TextInput, TextInputProps, View} from "react-native";
import {useThemeContext} from "../../contexts/themeContext";
import MyIcon from "../MyIcon/MyIcon";
import styles from "./MyInput.styles";
import {MyInputProps} from "../../types/components/myInput";
import {
	START_ICON_HEIGHT,
	START_ICON_VARIANT,
	START_ICON_WIDTH
} from "../../utils/constants/components/myInput";

/** Custom text input component. */
const MyInput: FC<MyInputProps & TextInputProps> = ({
	style,
	startIconName,
	startIconColor,
	startIconThickness,
	// TextInput component props
	...textInputProps
}) => {
	const theme = useThemeContext();

	// Input style dependent on the current theme
	const inputStyle = {
		padding: theme.spacing.m,
		backgroundColor: theme.colors.primary
	};

	return (
		<View>
			<TextInput
				style={[inputStyle, styles.input, style]}
				placeholderTextColor={theme.colors.primaryLight}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...textInputProps}
			/>
			{/* Icon on the start of the input field */}
			<MyIcon
				name={startIconName}
				color={startIconColor}
				thickness={startIconThickness}
				height={START_ICON_HEIGHT}
				width={START_ICON_WIDTH}
				variant={START_ICON_VARIANT}
				style={[{left: theme.spacing.m, top: "50%"}, styles.icon]}
			/>
		</View>
	);
};

export default MyInput;
