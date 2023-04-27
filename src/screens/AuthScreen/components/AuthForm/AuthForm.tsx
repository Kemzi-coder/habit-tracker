import React, {useState} from "react";
import {SignupForm} from "../../../../modules/SignupForm";
import {SigninForm} from "../../../../modules/SigninForm";

const AuthForm = () => {
	const [isSignup, setIsSignup] = useState(true);

	const handleSignupLinkPress = () => setIsSignup(false);

	const handleSigninLinkPress = () => setIsSignup(true);

	return isSignup ? (
		<SignupForm onLinkPress={handleSignupLinkPress} />
	) : (
		<SigninForm onLinkPress={handleSigninLinkPress} />
	);
};

export default AuthForm;
