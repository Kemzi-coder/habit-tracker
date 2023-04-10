import {useThemeContext} from "contexts/themeContext";
import React, {FC} from "react";
import {View} from "react-native";
import {ViewProps} from "react-native-svg/lib/typescript/fabric/utils";
import {MyWidgetProps} from "types/components/UI/widget/myWidget";
import styles from "./MyWidget.styles";

const MyWidget: FC<MyWidgetProps & ViewProps> = ({
	topSection,
	bottomSection,
	style,
	...viewProps
}) => {
	const theme = useThemeContext();

	const containerStyle = [
		styles.container,
		{
			backgroundColor: theme.colors.primary,
			padding: theme.spacing.m
		},
		style
	];

	return (
		<View style={containerStyle} {...viewProps}>
			<View style={styles.topSection}>{topSection}</View>
			<View>{bottomSection}</View>
		</View>
	);
};

export default MyWidget;
