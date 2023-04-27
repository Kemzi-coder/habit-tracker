import React, {FC, useState} from "react";
import {StyleProp, View, ViewStyle} from "react-native";
import {useThemeContext} from "../../../../../shared/theme";
import WidgetLayout from "../../WidgetLayout/WidgetLayout";
import {MyText} from "../../../../MyText";
import WidgetButton from "../../WidgetButton/WidgetButton";
import {CounterWidgetProps} from "../../../types/counterWidget";

const CounterWidget: FC<CounterWidgetProps> = ({initialValue = 0, title}) => {
	const theme = useThemeContext();
	const [counter, setCounter] = useState(initialValue);

	const handleIncrement = () => setCounter(prev => prev + 1);

	const handleDecrement = () =>
		setCounter(prev => (prev === initialValue ? prev : prev - 1));

	const bottomSectionStyle: StyleProp<ViewStyle> = {
		flexDirection: "row",
		gap: theme.spacing.s
	};

	return (
		<WidgetLayout
			topSection={
				<>
					<MyText color="accent" text={counter} variant="header" />
					<MyText text={title} variant="body" />
				</>
			}
			bottomSection={
				<View style={bottomSectionStyle}>
					<WidgetButton
						onPress={handleIncrement}
						iconName="plus"
						iconVariant="outline"
					/>
					<WidgetButton
						onPress={handleDecrement}
						iconName="minus"
						iconVariant="outline"
					/>
				</View>
			}
		/>
	);
};

export default CounterWidget;
