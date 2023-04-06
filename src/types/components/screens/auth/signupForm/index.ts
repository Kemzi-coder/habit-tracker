import {GestureResponderEvent} from "react-native";

export interface SignupFormProps {
	onLinkPress: (e: GestureResponderEvent) => void;
}

export interface SignupFormData {
	username: string;
	email: string;
	password: string;
}
