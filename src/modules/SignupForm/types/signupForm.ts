import {GestureResponderEvent} from "react-native";

interface SignupFormProps {
	onLinkPress: (e: GestureResponderEvent) => void;
}

interface SignupFormData {
	username: string;
	email: string;
	password: string;
}

export type {SignupFormData, SignupFormProps};
