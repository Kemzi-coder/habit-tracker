import React, {FC} from "react";
import AuthLayout from "../../../components/layouts/AuthLayout/AuthLayout";
import MyInput from "../../../components/UI/MyInput/MyInput";
import MySpacer from "../../../components/UI/MySpacer/MySpacer";
import {SignupFormProps} from "../../../types/components/screens/auth/signupForm";

const SignupForm: FC<SignupFormProps> = ({onLinkPress}) => (
	<AuthLayout
		title="Welcome!"
		subtitle="Create your account"
		buttonText="Sign up"
		footerText="Already have an account?"
		footerLinkText="Sign in"
		onFooterLinkPress={onLinkPress}
	>
		<MyInput
			placeholder="Username"
			startIconColor="primaryLight"
			startIconThickness={1.3}
			startIconName="user"
		/>
		<MySpacer size="m" />
		<MyInput
			placeholder="Email"
			startIconColor="primaryLight"
			startIconThickness={1.3}
			startIconName="email"
		/>
		<MySpacer size="m" />
		<MyInput
			type="password"
			placeholder="Password"
			startIconColor="primaryLight"
			startIconThickness={1.3}
			startIconName="lock"
		/>
	</AuthLayout>
);

export default SignupForm;
