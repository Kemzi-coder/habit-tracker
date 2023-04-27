import React from "react";
import {MyMenu} from "../../../../UI/MyMenu";
import {topLeftMenuButtons, topRightMenuButtons} from "../../data/menuButtons";

const TopMenu = () => (
	<MyMenu
		leftButtonList={topLeftMenuButtons}
		rightButtonList={topRightMenuButtons}
	/>
);

export default TopMenu;
