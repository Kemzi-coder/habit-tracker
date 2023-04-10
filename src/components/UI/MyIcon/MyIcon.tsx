import React, {FC} from "react";
import {View, ViewProps} from "react-native";
import {useThemeContext} from "contexts";
import {MyIconProps} from "types/components/UI";
import {
	UserOutlineIcon,
	LockOutlineIcon,
	EmailOutlineIcon,
	PlaySolidIcon,
	PauseSolidIcon,
	PlusOutlineIcon,
	MinusOutlineIcon,
	StopSolidIcon
} from "components/icons";
import HomeSolidIcon from "components/icons/HomeSolidIcon/HomeSolidIcon";

/**
	Universal icon component.
	@component
	@param {(import("types/components/UI").MyIconProps | import("react-native").ViewProps)} props - Component props
	@return {JSX.Element} Icon inside a View
*/
const MyIcon: FC<MyIconProps & ViewProps> = ({
	variant,
	name,
	size,
	color,
	...viewProps
}) => {
	const theme = useThemeContext();
	const iconSize = size ? theme.iconSizes[size] : theme.iconSizes.m;
	const iconColor = color ? theme.colors[color] : theme.colors.text;
	const {width, height, thickness} = iconSize;

	let icon = null;

	if (variant === "outline") {
		// If the icon name matches, assign appropriate icon component
		switch (name) {
			case "email":
				icon = (
					<EmailOutlineIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			case "lock":
				icon = (
					<LockOutlineIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			case "user":
				icon = (
					<UserOutlineIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			case "plus":
				icon = (
					<PlusOutlineIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			case "minus":
				icon = (
					<MinusOutlineIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			default:
				break;
		}
	} else {
		switch (name) {
			case "home":
				icon = (
					<HomeSolidIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			case "play":
				icon = (
					<PlaySolidIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			case "pause":
				icon = (
					<PauseSolidIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			case "stop":
				icon = (
					<StopSolidIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			default:
				break;
		}
	}

	return <View {...viewProps}>{icon}</View>;
};

export default MyIcon;
