import {ReactNode} from "react";
import {GestureResponderEvent} from "react-native";

export interface AuthLayoutProps {
	title: string;
	subtitle: string;
	buttonText: string;
	footerText: string;
	onFooterLinkPress: (e: GestureResponderEvent) => void;
	footerLinkText: string;
	children: ReactNode;
}
