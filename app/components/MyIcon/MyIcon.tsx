import React, {FC} from "react";
import {View} from "react-native";
import {useThemeContext} from "../../contexts/themeContext";
import EmailOutlineIcon from "../../icons/EmailOutlineIcon/EmailOutlineIcon";
import LockOutlineIcon from "../../icons/LockOutlineIcon/LockOutlineIcon";
import UserOutlineIcon from "../../icons/UserOutlineIcon/UserOutlineIcon";
import {MyIconProps} from "../../types/components/myIcon";
import {IconNames, IconVariants} from "../../utils/constants/icons";

/** Universal icon component. */
const MyIcon: FC<MyIconProps> = ({
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

	if (variant === IconVariants.Outline) {
		// If the icon name matches, assign appropriate icon component
		switch (name) {
			case IconNames.Email:
				icon = (
					<EmailOutlineIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			case IconNames.Lock:
				icon = (
					<LockOutlineIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			case IconNames.User:
				icon = (
					<UserOutlineIcon {...{color: iconColor, height, width, thickness}} />
				);
				break;
			default:
				break;
		}
	}

	return <View {...viewProps}>{icon}</View>;
};

export default MyIcon;
