import {StyleSheet} from "react-native";
import {MY_MENU_HEIGHT} from "utils/constants/components/UI";

const styles = StyleSheet.create({
	container: {
		height: MY_MENU_HEIGHT,
		flexDirection: "row",
		justifyContent: "space-between",
		elevation: 2
	},
	centralButton: {
		borderWidth: 1,
		justifyContent: "center",
		alignItems: "center",
		elevation: 2
	},
	sectionListContent: {
		flexGrow: 1,
		alignItems: "center"
	}
});

export default styles;
