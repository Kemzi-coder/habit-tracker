import React, {FC} from "react";
import {useForm} from "react-hook-form";
import {SignupFormData, SignupFormProps} from "../../types/signupForm";
import {Screens, useTypedNavigation} from "../../../../shared/navigation";
import {FormLayout} from "../../../../components/FormLayout";
import {FormField} from "../../../../components/FormField";
import {MySpacer} from "../../../../UI/MySpacer";

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
		<FormLayout
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
			<MySpacer />
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

export default SignupForm;
