import {MyMenu} from "components/UI/menu";
import TimerWidget from "components/widgets/TimerWidget/TimerWidget";
import {useThemeContext} from "contexts/themeContext";
import React from "react";
import {FlatList, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {
	bottomLeftMenuButtons,
	bottomRightMenuButtons,
	topLeftMenuButtons,
	topRightMenuButtons
} from "utils/data";

// TODO: Change it to render real data. Right now this code is for the test purposes only.
const data = [
	{id: 1, iconName: "home", isActive: true},
	{id: 2, iconName: "home", isActive: false},
	{id: 3, iconName: "home", isActive: false}
];

const HomeScreen = () => {
	const theme = useThemeContext();

	const containerStyle = {backgroundColor: theme.colors.background, flex: 1};

	// TODO: Change it to render real data. Right now this code is for the test purposes only.
	const renderItem = () => (
		<View style={{flex: 1, margin: theme.spacing.s}}>
			<TimerWidget initialTimeInMs={5000} />
		</View>
	);

	return (
		<SafeAreaView style={containerStyle}>
			<View style={{flex: 1}}>
				<MyMenu
					leftButtonList={topLeftMenuButtons}
					rightButtonList={topRightMenuButtons}
				/>
				<View style={{flexGrow: 1, padding: 8}}>
					<FlatList
						contentContainerStyle={{flexGrow: 1}}
						numColumns={2}
						data={data}
						renderItem={renderItem}
					/>
				</View>
				<MyMenu
					onCentralButtonPress={() => console.log("hey")}
					withCentralButton
					leftButtonList={bottomLeftMenuButtons}
					rightButtonList={bottomRightMenuButtons}
				/>
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
