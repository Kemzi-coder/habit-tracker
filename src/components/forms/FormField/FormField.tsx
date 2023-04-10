import React, {FC} from "react";
import {Controller} from "react-hook-form";
import {FormFieldProps} from "types/components/forms";
import {MyInput, MySpacer, MyText} from "components/UI";

const FormField: FC<FormFieldProps> = ({
	control,
	name,
	rules,
	placeholder,
	startIconName,
	error,
	type
}) => (
	<>
		{error ? (
			<>
				<MyText color="danger" text="This is required." variant="body" />
				<MySpacer size="s" />
			</>
		) : null}
		<Controller
			control={control}
			rules={rules}
			name={name}
			render={({field: {onChange, onBlur, value}}) => (
				<MyInput
					placeholder={placeholder}
					startIconColor="primaryLight"
					startIconName={startIconName}
					onChangeText={onChange}
					value={value}
					onBlur={onBlur}
					type={type}
				/>
			)}
		/>
	</>
);

export default FormField;
