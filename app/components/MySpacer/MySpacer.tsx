import React, {FC} from "react";
import {View} from "react-native";
import {useThemeContext} from "../../contexts/themeContext";
import {MySpacerProps} from "../../types/components/mySpacer";

const MySpacer: FC<MySpacerProps> = ({size, isHorizontal = false}) => {
	const theme = useThemeContext();
	const spacerSize = size ? theme.spacing[size] : theme.spacing.m;
	const defaultValue = "auto";

	const viewStyle = {
		width: isHorizontal ? spacerSize : defaultValue,
		height: !isHorizontal ? spacerSize : defaultValue
	};

	return <View style={viewStyle} />;
};

export default MySpacer;
