import {MyText} from "components/UI";
import {MyWidget, MyWidgetButton} from "components/UI/widget";
import {useThemeContext} from "contexts/themeContext";
import React, {FC, useState} from "react";
import {StyleProp, View, ViewStyle} from "react-native";
import {CounterWidgetProps} from "types/components/widgets";

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
		<MyWidget
			topSection={
				<>
					<MyText color="accent" text={counter} variant="header" />
					<MyText text={title} variant="body" />
				</>
			}
			bottomSection={
				<View style={bottomSectionStyle}>
					<MyWidgetButton
						onPress={handleIncrement}
						iconName="plus"
						iconVariant="outline"
					/>
					<MyWidgetButton
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
