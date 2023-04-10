import React, {FC} from "react";
import {Path, Svg} from "react-native-svg";
import {IconProps} from "types/components/icons";

const PauseSolidIcon: FC<IconProps> = ({color, height, width}) => (
	<Svg fill={color} viewBox="0 0 24 24" height={width} width={height}>
		<Path
			fillRule="evenodd"
			d="M6.75 5.25a.75.75 0 01.75-.75H9a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H7.5a.75.75 0 01-.75-.75V5.25zm7.5 0A.75.75 0 0115 4.5h1.5a.75.75 0 01.75.75v13.5a.75.75 0 01-.75.75H15a.75.75 0 01-.75-.75V5.25z"
			clipRule="evenodd"
		/>
	</Svg>
);

export default PauseSolidIcon;
