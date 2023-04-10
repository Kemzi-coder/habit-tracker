import {StyleSheet} from "react-native";
import {
	WIDGET_BORDER_RADIUS,
	WIDGET_HEIGHT
} from "utils/constants/components/UI/widget";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: WIDGET_HEIGHT,
		borderRadius: WIDGET_BORDER_RADIUS
	},
	topSection: {flexGrow: 1, alignItems: "center", justifyContent: "center"}
});

export default styles;
