import React, {useState} from "react";
import SignupForm from "./SignupForm/SignupForm";
import SigninForm from "./SigninForm/SigninForm";

const AuthPage = () => {
	const [isSignup, setIsSignup] = useState(true);

	const handleSignupLinkPress = () => setIsSignup(false);

	const handleSigninLinkPress = () => setIsSignup(true);

	return isSignup ? (
		<SignupForm onLinkPress={handleSignupLinkPress} />
	) : (
		<SigninForm onLinkPress={handleSigninLinkPress} />
	);
};

export default AuthPage;
