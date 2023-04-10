import React, {FC} from "react";
import {View, ViewProps} from "react-native";
import {useThemeContext} from "contexts";
import {MySpacerProps} from "types/components/UI";

/**
	A spacer component that renders a View with a specified size and direction.
	@component
	@param {(import("types/components/UI").MySpacerProps | import("react-native").ViewProps)} props - Component props
	@returns {JSX.Element} A View component with the specified size and orientation
*/
const MySpacer: FC<MySpacerProps & ViewProps> = ({
	size,
	isHorizontal = false,
	...viewProps
}) => {
	const theme = useThemeContext();
	const spacerSize = size ? theme.spacing[size] : theme.spacing.m;
	const defaultValue = "auto";

	const viewStyle = {
		width: isHorizontal ? spacerSize : defaultValue,
		height: !isHorizontal ? spacerSize : defaultValue
	};

	return <View style={viewStyle} {...viewProps} />;
};

export default MySpacer;
