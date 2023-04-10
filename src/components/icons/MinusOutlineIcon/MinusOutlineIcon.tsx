import React, {FC} from "react";
import {Path, Svg} from "react-native-svg";
import {IconProps} from "types/components/icons";

const MinusOutlineIcon: FC<IconProps> = ({color, height, thickness, width}) => (
	<Svg width={width} height={height} viewBox="0 0 12 12" fill="none">
		<Path
			d="M9.75 6H2.25"
			stroke={color}
			strokeWidth={thickness}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export default MinusOutlineIcon;
