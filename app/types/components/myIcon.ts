import {ViewProps} from "react-native/types";
import {IconNames, IconVariants} from "../../utils/constants/icons";
import {Colors, IconSizes} from "../../utils/constants/theme";

export interface MyIconProps extends ViewProps {
	variant: IconVariants;
	name: IconNames;
	size: IconSizes;
	color: Colors;
}
