import React from "react";
import {FlatList, ListRenderItemInfo, View} from "react-native";
import {MyWidget} from "../../../../UI/MyWidget";
import {useThemeContext} from "../../../../shared/theme";
import {Widget} from "../../types/slice";
import {useWidgets} from "../../store/store";

const WidgetList = () => {
	const theme = useThemeContext();
	const widgets = useWidgets();

	// TODO: Change it to render real data. Right now this code is for the test purposes only.
	const renderItem = ({item}: ListRenderItemInfo<Widget>) => (
		<View style={{flex: 1, margin: theme.spacing.s}}>
			<MyWidget variant={item.variant} widgetProps={{...item.widgetProps}} />
		</View>
	);

	return (
		<View style={{flex: 1, flexGrow: 1}}>
			<FlatList
				contentContainerStyle={{flexGrow: 1, padding: 8}}
				numColumns={2}
				data={widgets}
				renderItem={renderItem}
			/>
		</View>
	);
};

export default WidgetList;
