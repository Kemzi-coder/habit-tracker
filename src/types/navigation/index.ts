import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Screens} from "utils/constants/navigation";

type AppNavigationProp = NativeStackNavigationProp<
	{[Screens.Auth]: undefined; [Screens.Home]: undefined},
	Screens
>;

// eslint-disable-next-line import/prefer-default-export
export type {AppNavigationProp};
