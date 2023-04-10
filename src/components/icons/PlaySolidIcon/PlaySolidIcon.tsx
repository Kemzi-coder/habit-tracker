import React, {FC} from "react";
import {Path, Svg} from "react-native-svg";
import {IconProps} from "types/components/icons";

const PlaySolidIcon: FC<IconProps> = ({color, height, width}) => (
	<Svg fill={color} viewBox="0 0 24 24" height={width} width={height}>
		<Path
			fillRule="evenodd"
			d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
			clipRule="evenodd"
		/>
	</Svg>
);

export default PlaySolidIcon;
