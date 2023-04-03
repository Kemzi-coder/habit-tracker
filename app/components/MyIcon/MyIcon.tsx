import React, {FC} from "react";
import {View} from "react-native";
import {MyIconProps} from "../../types/components/myIcon";
import {IconNames} from "../../utils/constants/icons";
import EmailOutlineIcon from "../../icons/EmailOutlineIcon/EmailOutlineIcon";

/** Universal icon component. */
const MyIcon: FC<MyIconProps> = ({
	variant,
	name,
	color,
	height,
	thickness,
	width,
	...viewProps
}) => {
	let icon = null;

	if (variant === "outline") {
		// If the icon name matches, return appropriate icon component
		switch (name) {
			case IconNames.Email:
				icon = <EmailOutlineIcon {...{color, height, width, thickness}} />;
				break;
			default:
				break;
		}
	}

	// eslint-disable-next-line react/jsx-props-no-spreading
	return <View {...viewProps}>{icon}</View>;
};

export default MyIcon;
