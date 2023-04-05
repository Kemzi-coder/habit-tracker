import React, {FC} from "react";
import {GestureResponderEvent, Linking, Pressable} from "react-native";
import {MyLinkProps} from "../../../types/components/UI/myLink";
import MyText from "../MyText/MyText";
import {useThemeContext} from "../../../contexts/themeContext";

const MyLink: FC<MyLinkProps> = ({
	text,
	link,
	color,
	onPress,
	...pressableProps
}) => {
	const theme = useThemeContext();
	const textColor = color || theme.colors.accent;

	const handlePress = async (e: GestureResponderEvent) => {
		onPress?.(e);

		if (link) {
			const canOpenURL = await Linking.canOpenURL(link);

			if (canOpenURL) {
				await Linking.openURL(link);
			}
		}
	};

	return (
		<Pressable onPress={handlePress} {...pressableProps}>
			<MyText style={{color: textColor}} variant="link" text={text} />
		</Pressable>
	);
};

export default MyLink;
