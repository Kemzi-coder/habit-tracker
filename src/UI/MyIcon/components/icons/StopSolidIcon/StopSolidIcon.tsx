import React, {FC} from "react";
import {Path, Svg} from "react-native-svg";
import {IconProps} from "../../../types/icons";

const StopSolidIcon: FC<IconProps> = ({color, height, width}) => (
	<Svg fill={color} viewBox="0 0 24 24" height={width} width={height}>
		<Path
			fillRule="evenodd"
			d="M4.5 7.5a3 3 0 013-3h9a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9z"
			clipRule="evenodd"
		/>
	</Svg>
);

export default StopSolidIcon;
