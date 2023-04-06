import React, {FC} from "react";
import {useForm} from "react-hook-form";
import {MySpacer} from "components/UI";
import {FormField} from "components/forms";
import {AuthLayout} from "components/layouts";
import {SigninFormData, SigninFormProps} from "types/components/screens/auth";

const SigninForm: FC<SigninFormProps> = ({onLinkPress}) => {
	const {
		control,
		handleSubmit,
		formState: {errors}
	} = useForm<SigninFormData>({
		defaultValues: {
			email: "",
			password: ""
		}
	});

	const onSubmit = handleSubmit(data => console.log(data));

	return (
		<AuthLayout
			onSubmitButtonPress={onSubmit}
			title="Welcome back!"
			subtitle="Sign in to your account"
			buttonText="Sign in"
			footerText="Don't have an account?"
			footerLinkText="Sign up"
			onFooterLinkPress={onLinkPress}
		>
			<FormField
				control={control}
				error={errors.email}
				name="email"
				placeholder="Email"
				rules={{required: true}}
				startIconName="email"
			/>
			<MySpacer size="m" />
			<FormField
				control={control}
				error={errors.password}
				name="password"
				placeholder="Password"
				rules={{required: true}}
				startIconName="lock"
				type="password"
			/>
		</AuthLayout>
	);
};

export default SigninForm;
