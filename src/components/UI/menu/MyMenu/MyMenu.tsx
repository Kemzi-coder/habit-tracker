import {useThemeContext} from "contexts/themeContext";
import React, {FC} from "react";
import {FlatList, ListRenderItem, Pressable, View} from "react-native";
import {MyMenuProps, MyMenuListButton} from "types/components/UI/menu";
import {WINDOW_WIDTH} from "utils/constants";
import {MyIcon} from "components/UI";
import styles from "./MyMenu.styles";
import MyMenuButton from "../MyMenuButton/MyMenuButton";

const MyMenu: FC<MyMenuProps> = ({
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
		: theme.colors.primary;

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
			backgroundColor: theme.colors.primary,
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
