import React from "react";
import {View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {WidgetList} from "../../../../modules/WidgetList";
import {useThemeContext} from "../../../../shared/theme";
import BottomMenu from "../BottomMenu/BottomMenu";
import TopMenu from "../TopMenu/TopMenu";

const HomeScreen = () => {
	const theme = useThemeContext();
	const containerStyle = {backgroundColor: theme.colors.background, flex: 1};

	return (
		<SafeAreaView style={containerStyle}>
			<View style={{flex: 1}}>
				<TopMenu />
				<WidgetList />
				<BottomMenu />
			</View>
		</SafeAreaView>
	);
};

export default HomeScreen;
