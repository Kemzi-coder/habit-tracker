import {CounterWidgetProps} from "./counterWidget";
import {TimerWidgetProps} from "./timerWidget";

type WidgetVariant = "timer" | "counter";

interface MyWidgetProps {
	variant: WidgetVariant;
	widgetProps: TimerWidgetProps & CounterWidgetProps;
}

export type {MyWidgetProps, WidgetVariant};
