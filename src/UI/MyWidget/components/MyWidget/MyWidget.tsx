import React, {FC} from "react";
import CounterWidget from "../widgets/CounterWidget/CounterWidget";
import TimerWidget from "../widgets/TimerWidget/TimerWidget";
import {MyWidgetProps} from "../../types/myWidget";

/**
	A reusable widget component that renders a container with two sections: a top section and a bottom section.
	The topSection and bottomSection props are used to provide the content for each section respectively.
	@component
	@param {(import("types/components/UI/widget").MyWidgetProps | import("react-native").ViewProps)} props - Component props
	@returns {JSX.Element} View component with 2 View components inside
*/
const MyWidget: FC<MyWidgetProps> = ({variant, widgetProps}) => {
	switch (variant) {
		case "counter":
			return (
				<CounterWidget
					title={widgetProps?.title}
					initialValue={widgetProps?.initialValue}
				/>
			);
		case "timer":
			return (
				<TimerWidget
					initialTimeInMs={widgetProps?.initialTimeInMs}
					title={widgetProps?.title}
				/>
			);
		default:
			return null;
	}
};

export default MyWidget;
