import React, {FC} from "react";
import {Path, Svg} from "react-native-svg";
import {IconProps} from "types/components/icons";

const PlusOutlineIcon: FC<IconProps> = ({color, height, thickness, width}) => (
	<Svg width={width} height={height} viewBox="0 0 21 21" fill="none">
		<Path
			d="M10.5 3.9375V17.0625M17.0625 10.5H3.9375"
			stroke={color}
			strokeWidth={thickness}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</Svg>
);

export default PlusOutlineIcon;
