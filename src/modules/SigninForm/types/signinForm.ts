import {GestureResponderEvent} from "react-native";

interface SigninFormProps {
	onLinkPress: (e: GestureResponderEvent) => void;
}

interface SigninFormData {
	email: string;
	password: string;
}

export type {SigninFormData, SigninFormProps};
