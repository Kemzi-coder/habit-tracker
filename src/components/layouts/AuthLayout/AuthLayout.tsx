import React, {FC} from "react";
import {KeyboardAvoidingView, View} from "react-native";
import {MyButton, MyLink, MyLogo, MySpacer, MyText} from "components/UI";
import {useThemeContext} from "contexts";
import {AuthLayoutProps} from "types/components/layouts";
import styles from "./AuthLayout.styles";

const AuthLayout: FC<AuthLayoutProps> = ({
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
				<MyLogo color="accent" />
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

export default AuthLayout;
