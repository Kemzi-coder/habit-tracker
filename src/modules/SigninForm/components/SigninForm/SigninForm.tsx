import React, {FC} from "react";
import {useForm} from "react-hook-form";
import {SigninFormData, SigninFormProps} from "../../types/signinForm";
import {FormLayout} from "../../../../components/FormLayout";
import {FormField} from "../../../../components/FormField";
import {MySpacer} from "../../../../UI/MySpacer";

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
		<FormLayout
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
			<MySpacer />
			<FormField
				control={control}
				error={errors.password}
				name="password"
				placeholder="Password"
				rules={{required: true}}
				startIconName="lock"
				type="password"
			/>
		</FormLayout>
	);
};

export default SigninForm;
