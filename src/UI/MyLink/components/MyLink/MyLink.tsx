import React, {FC} from "react";
import {
	GestureResponderEvent,
	Linking,
	Pressable,
	PressableProps
} from "react-native";
import MyText from "../../../MyText/components/MyText/MyText";
import {MyLinkProps} from "../../types/myLink";
import {useThemeContext} from "../../../../shared/theme";

/**
 * A component that renders a clickable link with custom text.
 * @component
 * @param {(import("types/components/UI").MyLinkProps | import("react-native").PressableProps)} props - Component props
 * @returns {JSX.Element} A Pressable component with a MyText component inside
 */
const MyLink: FC<MyLinkProps & PressableProps> = ({
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
