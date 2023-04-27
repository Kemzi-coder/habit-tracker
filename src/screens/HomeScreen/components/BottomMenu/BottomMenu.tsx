import React from "react";
import {MyMenu} from "../../../../UI/MyMenu";
import {useAddWidget} from "../../../../modules/WidgetList";
import {
	bottomLeftMenuButtons,
	bottomRightMenuButtons
} from "../../data/menuButtons";

const BottomMenu = () => {
	const addWidget = useAddWidget();
	const handleCentralButtonPress = () => {
		addWidget({
			variant: "timer",
			widgetProps: {title: "workout", initialTimeInMs: 100000}
		});
	};

	return (
		<MyMenu
			onCentralButtonPress={handleCentralButtonPress}
			withCentralButton
			leftButtonList={bottomLeftMenuButtons}
			rightButtonList={bottomRightMenuButtons}
		/>
	);
};

export default BottomMenu;
