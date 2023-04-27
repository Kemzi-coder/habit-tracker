import React, {FC, useCallback, useRef, useState} from "react";
import {View} from "react-native";
import {useThemeContext} from "../../../../../shared/theme";
import {TIMER_UPDATE_TIME} from "../../../constants/timerWidget";
import formatTimer from "../../../helpers/fomatTimer/formatTimer";
import WidgetLayout from "../../WidgetLayout/WidgetLayout";
import {MyText} from "../../../../MyText";
import WidgetButton from "../../WidgetButton/WidgetButton";
import {TimerWidgetProps} from "../../../types/timerWidget";

const TimerWidget: FC<TimerWidgetProps> = ({
	initialTimeInMs,
	title = "Timer"
}) => {
	const theme = useThemeContext();
	const [timerIsPaused, setTimerIsPaused] = useState(false);
	const [timerIsActive, setTimerIsActive] = useState(false);
	const [timerValue, setTimerValue] = useState(initialTimeInMs);
	const timer = useRef<number | null>(null);

	// Function to clear the timer by timerId
	const clearTimer = (timerId: number) => {
		clearInterval(timerId);
		timer.current = null;
	};

	// Function to pause a timer.
	// Works only if a timer exists.
	const handlePauseTimer = useCallback(() => {
		if (timer.current === null) {
			return;
		}

		setTimerIsPaused(true);
		clearTimer(timer.current);
	}, []);

	// Function to stop a timer
	const handleStopTimer = useCallback(() => {
		if (timer.current !== null) {
			clearTimer(timer.current);
		}

		setTimerIsActive(false);
		setTimerValue(initialTimeInMs);
	}, [initialTimeInMs]);

	// Function to start a timer.
	// Works only if there is no active timer.
	const handleStartTimer = useCallback(() => {
		if (timer.current !== null) {
			return;
		}

		setTimerIsActive(true);
		setTimerIsPaused(false);

		const intervalId = setInterval(() => {
			setTimerValue(prev => {
				if (prev === TIMER_UPDATE_TIME) {
					handleStopTimer();
				}
				return prev - TIMER_UPDATE_TIME;
			});
		}, TIMER_UPDATE_TIME);

		timer.current = intervalId;
	}, [handleStopTimer]);

	// Function to toggle start and pause timer actions.
	// Works only if a timer value is greater than 0.
	const handleControlTimer = useCallback(() => {
		if (timerValue <= 0) {
			return;
		}

		if (timer.current !== null) {
			handlePauseTimer();
		} else {
			handleStartTimer();
		}
	}, [handleStartTimer, handlePauseTimer, timerValue]);

	// Convert timer value in milliseconds to the time string
	let timerString = "00:00";
	if (timerValue) {
		timerString = formatTimer(timerValue);
	}

	return (
		<WidgetLayout
			topSection={
				<>
					<MyText color="accent" text={timerString} variant="header" />
					<MyText text={title} variant="body" />
				</>
			}
			bottomSection={
				<View style={{flexDirection: "row", gap: theme.spacing.s}}>
					<WidgetButton
						onPress={handleControlTimer}
						iconName={timerIsPaused || !timerIsActive ? "play" : "pause"}
						iconVariant="solid"
					/>
					{timerIsActive ? (
						<WidgetButton
							onPress={handleStopTimer}
							iconName="stop"
							iconVariant="solid"
						/>
					) : null}
				</View>
			}
		/>
	);
};

export default TimerWidget;
