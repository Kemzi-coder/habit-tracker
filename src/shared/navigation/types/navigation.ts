import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {Screens} from "../constants/navigation";

type AppNavigationProp = NativeStackNavigationProp<
	{[Screens.Auth]: undefined; [Screens.Home]: undefined},
	Screens
>;

export type {AppNavigationProp};
