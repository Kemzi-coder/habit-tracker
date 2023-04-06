import {Control, FieldError, RegisterOptions} from "react-hook-form";
import {MyInputType} from "../../UI/myInput";
import {IconName} from "../../../theme";

export interface FormFieldProps {
	name: string;
	control: Control<any>;
	rules: RegisterOptions<any, any>;
	placeholder: string;
	startIconName: IconName;
	error: FieldError | undefined;
	type?: MyInputType;
}
