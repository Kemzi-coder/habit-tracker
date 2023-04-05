import React, {FC} from "react";
import AuthLayout from "../../../components/layouts/AuthLayout/AuthLayout";
import MyInput from "../../../components/UI/MyInput/MyInput";
import MySpacer from "../../../components/UI/MySpacer/MySpacer";
import {SigninFormProps} from "../../../types/components/screens/auth/signinForm";

const SigninForm: FC<SigninFormProps> = ({onLinkPress}) => (
	<AuthLayout
		title="Welcome back!"
		subtitle="Sign in to your account"
		buttonText="Sign in"
		footerText="Don't have an account?"
		footerLinkText="Sign up"
		onFooterLinkPress={onLinkPress}
	>
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

export default SigninForm;
