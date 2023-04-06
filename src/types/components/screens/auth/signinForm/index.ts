import {GestureResponderEvent} from "react-native";

export interface SigninFormProps {
	onLinkPress: (e: GestureResponderEvent) => void;
}

export interface SigninFormData {
	email: string;
	password: string;
}
