import {IconNames, IconVariants} from "../../utils/constants/icons";
import {Colors} from "../../utils/constants/theme";

type MyInputType = "password" | "text";

export interface MyInputProps {
	startIconName: IconNames;
	startIconColor: Colors;
	startIconThickness: number;
	type?: MyInputType;
	startIconVariant?: IconVariants;
}
