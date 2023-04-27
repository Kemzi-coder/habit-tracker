import {ReactNode} from "react";
import {GestureResponderEvent} from "react-native";

interface FormLayoutProps {
	title: string;
	subtitle: string;
	buttonText: string;
	footerText: string;
	onFooterLinkPress: (e: GestureResponderEvent) => void;
	footerLinkText: string;
	children: ReactNode;
	onSubmitButtonPress: (e: GestureResponderEvent) => void;
}

export type {FormLayoutProps};
