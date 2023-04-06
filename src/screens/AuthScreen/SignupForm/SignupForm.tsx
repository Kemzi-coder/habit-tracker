import React, {FC} from "react";
import {useForm} from "react-hook-form";
import {MySpacer} from "components/UI";
import {FormField} from "components/forms";
import {AuthLayout} from "components/layouts";
import {useTypedNavigation} from "hooks";
import {SignupFormData, SignupFormProps} from "types/components/screens/auth";
import {Screens} from "utils/constants/navigation";

const SignupForm: FC<SignupFormProps> = ({onLinkPress}) => {
	const navigation = useTypedNavigation();
	const {
		control,
		handleSubmit,
		formState: {errors}
	} = useForm<SignupFormData>({
		defaultValues: {
			username: "",
			email: "",
			password: ""
		}
	});

	const onSubmit = handleSubmit(data => {
		console.log(data);
		navigation.navigate(Screens.Home);
	});

	return (
		<AuthLayout
			onSubmitButtonPress={onSubmit}
			title="Welcome!"
			subtitle="Create your account"
			buttonText="Sign up"
			footerText="Already have an account?"
			footerLinkText="Sign in"
			onFooterLinkPress={onLinkPress}
		>
			<FormField
				control={control}
				error={errors.username}
				name="username"
				placeholder="Username"
				rules={{required: true}}
				startIconName="user"
			/>
			<MySpacer size="m" />
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

export default SignupForm;
