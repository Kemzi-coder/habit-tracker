import {StyleSheet} from "react-native";
import {
	WIDGET_BORDER_RADIUS,
	WIDGET_HEIGHT
} from "../../constants/widgetLayout";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: WIDGET_HEIGHT,
		borderRadius: WIDGET_BORDER_RADIUS,
		elevation: 2
	},
	topSection: {flexGrow: 1, alignItems: "center", justifyContent: "center"}
});

export default styles;
