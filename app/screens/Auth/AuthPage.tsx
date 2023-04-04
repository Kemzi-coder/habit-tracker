import React from "react";
import {KeyboardAvoidingView, View} from "react-native";
import MyButton from "../../components/MyButton/MyButton";
import MyInput from "../../components/MyInput/MyInput";
import MyLogo from "../../components/MyLogo/MyLogo";
import MySpacer from "../../components/MySpacer/MySpacer";
import MyText from "../../components/MyText/MyText";
import {useThemeContext} from "../../contexts/themeContext";
import {IconNames} from "../../utils/constants/icons";
import {
	ButtonSizes,
	Colors,
	SpacingSizes,
	TextVariants
} from "../../utils/constants/theme";
import styles from "./AuthPage.styles";

const AuthPage = () => {
	const theme = useThemeContext();

	const containerStyle = [
		{backgroundColor: theme.colors.background, padding: theme.spacing.l},
		styles.container
	];

	return (
		<View style={containerStyle}>
			<KeyboardAvoidingView behavior="padding" style={styles.formContainer}>
				<MyLogo color={Colors.Accent} />
				<MySpacer size={SpacingSizes.L} />
				<MyText variant={TextVariants.Header} text="Welcome!" />
				<MySpacer size={SpacingSizes.S} />
				<MyText variant={TextVariants.Body} text="Create your account" />
				<MySpacer size={SpacingSizes.L} />
				<View style={styles.form}>
					<MyInput
						placeholder="Username"
						startIconColor={Colors.PrimaryLight}
						startIconThickness={1.3}
						startIconName={IconNames.User}
					/>
					<MySpacer size={SpacingSizes.M} />
					<MyInput
						placeholder="Email"
						startIconColor={Colors.PrimaryLight}
						startIconThickness={1.3}
						startIconName={IconNames.Email}
					/>
					<MySpacer size={SpacingSizes.M} />
					<MyInput
						type="password"
						placeholder="Password"
						startIconColor={Colors.PrimaryLight}
						startIconThickness={1.3}
						startIconName={IconNames.Lock}
					/>
				</View>
				<MySpacer size={SpacingSizes.L} />
				<MyButton size={ButtonSizes.L} text="Sign up" />
			</KeyboardAvoidingView>
			<View style={{flexShrink: 0}}>
				<MyText text="Already have an account?" variant={TextVariants.Body} />
			</View>
		</View>
	);
};

export default AuthPage;
