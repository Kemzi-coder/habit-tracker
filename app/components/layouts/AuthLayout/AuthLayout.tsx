import React, {FC} from "react";
import {View, KeyboardAvoidingView} from "react-native";
import {AuthLayoutProps} from "../../../types/components/layouts/authLayout";
import MyButton from "../../UI/MyButton/MyButton";
import MyLink from "../../UI/MyLink/MyLink";
import MyLogo from "../../UI/MyLogo/MyLogo";
import MySpacer from "../../UI/MySpacer/MySpacer";
import MyText from "../../UI/MyText/MyText";
import styles from "./AuthLayout.styles";
import {useThemeContext} from "../../../contexts/themeContext";

const AuthLayout: FC<AuthLayoutProps> = ({
	buttonText,
	footerLinkText,
	footerText,
	onFooterLinkPress,
	subtitle,
	title,
	children
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
				<MyButton size="l" text={buttonText} />
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
