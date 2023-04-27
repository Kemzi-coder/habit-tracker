import React, {FC} from "react";
import {View, ViewProps} from "react-native";
import styles from "./WidgetLayout.styles";
import {useThemeContext} from "../../../../shared/theme";
import {WidgetLayoutProps} from "../../types/widgetLayout";

/**
	A reusable widget component that renders a container with two sections: a top section and a bottom section.
	The topSection and bottomSection props are used to provide the content for each section respectively.
	@component
	@param {(import("types/components/layouts").WidgetLayoutProps | import("react-native").ViewProps)} props - Component props
	@returns {JSX.Element} View component with 2 View components inside
*/
const WidgetLayout: FC<WidgetLayoutProps & ViewProps> = ({
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

export default WidgetLayout;
