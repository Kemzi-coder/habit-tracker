import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import AuthForm from "../AuthForm/AuthForm";

const AuthScreen = () => (
	<SafeAreaView style={{flex: 1}}>
		<AuthForm />
	</SafeAreaView>
);

export default AuthScreen;
