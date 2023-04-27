import React, {FC} from "react";
import {
	FlatList,
	ListRenderItem,
	Pressable,
	View,
	ViewProps
} from "react-native";
import {WINDOW_WIDTH} from "../../../../shared/app";
import {useThemeContext} from "../../../../shared/theme";
import {MyIcon} from "../../../MyIcon";
import styles from "./MyMenu.styles";
import {MyMenuListButton, MyMenuProps} from "../../types/myMenu";
import MyMenuButton from "../MyMenuButton/MyMenuButton";

/**
 * A custom menu component that renders a horizontal list of menu buttons.
 * @component
 * @param {(import("types/components/UI/menu").MyMenuProps | import("react-native").ViewProps)} props - Component props
 * @returns {JSX.Element} View component with FlatList and Pressable components inside
 */
const MyMenu: FC<MyMenuProps & ViewProps> = ({
	leftButtonList,
	rightButtonList,
	backgroundColor,
	style,
	onCentralButtonPress,
	withCentralButton = false,
	...viewProps
}) => {
	const theme = useThemeContext();

	// Constants
	const containerHorizontalPadding = theme.spacing.m;
	const containerBackgroundColor = backgroundColor
		? theme.colors[backgroundColor]
		: theme.colors.primaryDark;

	const menuButtonHorizontalMargin = theme.spacing.s;

	const sectionSpaceBetween = theme.spacing.s;
	const sectionWidth = withCentralButton
		? (WINDOW_WIDTH -
				containerHorizontalPadding * 2 -
				sectionSpaceBetween * 2) /
		  3
		: (WINDOW_WIDTH - containerHorizontalPadding * 2 - sectionSpaceBetween) / 2;

	const centralButtonSize = sectionWidth * 0.6;
	const centralButtonTranslateY = -centralButtonSize * 0.3;
	const centralButtonRippleConf = {
		color: theme.colors.accent,
		borderless: true,
		radius: centralButtonSize / 2
	};
	//

	// Styles
	const containerStyle = [
		styles.container,
		{
			backgroundColor: containerBackgroundColor,
			paddingHorizontal: containerHorizontalPadding
		},
		style
	];

	const sectionStyle = {width: sectionWidth};

	const centralButtonStyle = [
		styles.centralButton,
		{
			backgroundColor: theme.colors.primaryDark,
			borderColor: theme.colors.accent,
			width: centralButtonSize,
			height: centralButtonSize,
			borderRadius: centralButtonSize / 2,
			transform: [{translateY: centralButtonTranslateY}]
		}
	];
	//

	const renderItem: ListRenderItem<MyMenuListButton> = ({item}) => (
		<View style={{marginHorizontal: menuButtonHorizontalMargin}}>
			<MyMenuButton iconName={item.iconName} isActive={item.isActive} />
		</View>
	);

	return (
		<View style={containerStyle} {...viewProps}>
			<View style={sectionStyle}>
				<FlatList
					horizontal
					contentContainerStyle={styles.sectionListContent}
					renderItem={renderItem}
					data={leftButtonList}
				/>
			</View>
			{/* Central section */}
			{withCentralButton ? (
				<View style={[sectionStyle, {alignItems: "center"}]}>
					<Pressable
						android_ripple={centralButtonRippleConf}
						onPress={onCentralButtonPress}
						style={centralButtonStyle}
					>
						<MyIcon color="accent" size="l" name="plus" variant="outline" />
					</Pressable>
				</View>
			) : null}
			<View style={sectionStyle}>
				<FlatList
					horizontal
					contentContainerStyle={styles.sectionListContent}
					inverted
					renderItem={renderItem}
					data={leftButtonList}
				/>
			</View>
		</View>
	);
};

export default MyMenu;
