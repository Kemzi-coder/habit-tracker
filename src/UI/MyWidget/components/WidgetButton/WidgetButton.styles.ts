import {StyleSheet} from "react-native";
import {
	WIDGET_BUTTON_BORDER_RADIUS,
	WIDGET_BUTTON_SIZE
} from "../../constants/widgetButton";

const styles = StyleSheet.create({
	button: {
		width: WIDGET_BUTTON_SIZE,
		height: WIDGET_BUTTON_SIZE,
		borderRadius: WIDGET_BUTTON_BORDER_RADIUS,
		alignItems: "center",
		justifyContent: "center"
	}
});

export default styles;
