import React, {FC} from "react";
import {KeyboardAvoidingView, View} from "react-native";
import styles from "./FormLayout.styles";
import {FormLayoutProps} from "../../types/formLayout";
import {useThemeContext} from "../../../../shared/theme";
import {MyLogo} from "../../../../UI/MyLogo";
import {MySpacer} from "../../../../UI/MySpacer";
import {MyText} from "../../../../UI/MyText";
import {MyButton} from "../../../../UI/MyButton";
import {MyLink} from "../../../../UI/MyLink";

const FormLayout: FC<FormLayoutProps> = ({
	buttonText,
	footerLinkText,
	footerText,
	onFooterLinkPress,
	subtitle,
	title,
	children,
	onSubmitButtonPress
}) => {
	const theme = useThemeContext();

	const containerStyle = [
		{backgroundColor: theme.colors.background, padding: theme.spacing.l},
		styles.container
	];

	return (
		<View style={containerStyle}>
			<KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
				<MyLogo />
				<MySpacer size="l" />
				<MyText variant="header" text={title} />
				<MySpacer size="s" />
				<MyText variant="body" text={subtitle} />
				<MySpacer size="l" />
				<View style={styles.form}>{children}</View>
				<MySpacer size="l" />
				<MyButton onPress={onSubmitButtonPress} size="l" text={buttonText} />
			</KeyboardAvoidingView>
			<View style={styles.footer}>
				<MyText text={footerText} variant="body" />
				<MySpacer size="s" isHorizontal />
				<MyLink onPress={onFooterLinkPress} text={footerLinkText} />
			</View>
		</View>
	);
};

export default FormLayout;
