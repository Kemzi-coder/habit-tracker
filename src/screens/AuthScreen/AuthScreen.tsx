import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import SignupForm from "./SignupForm/SignupForm";
import SigninForm from "./SigninForm/SigninForm";

const AuthScreen = () => {
	const [isSignup, setIsSignup] = useState(true);

	const handleSignupLinkPress = () => setIsSignup(false);

	const handleSigninLinkPress = () => setIsSignup(true);

	return (
		<SafeAreaView style={{flex: 1}}>
			{isSignup ? (
				<SignupForm onLinkPress={handleSignupLinkPress} />
			) : (
				<SigninForm onLinkPress={handleSigninLinkPress} />
			)}
		</SafeAreaView>
	);
};

export default AuthScreen;
