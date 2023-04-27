import {Control, FieldError, RegisterOptions} from "react-hook-form";
import {IconName} from "../../../UI/MyIcon";
import {MyInputType} from "../../../UI/MyInput";

interface FormFieldProps {
	name: string;
	control: Control<any>;
	rules: RegisterOptions<any, any>;
	placeholder: string;
	startIconName: IconName;
	error: FieldError | undefined;
	type?: MyInputType;
}

export type {FormFieldProps};
