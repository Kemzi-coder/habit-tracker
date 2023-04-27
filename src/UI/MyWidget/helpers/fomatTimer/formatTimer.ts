/**
 * Function for converting the time in milliseconds into a time string.
 * The time string will be in the format HH:MM:SS if the number of hours is greater than 0. Otherwise the format will be MM:SS.
 * @param {number} timeInMs - Natural. The time in milliseconds
 * @return {string} The time string
 *
 * @example
 * // output: "00:00"
 * formatTimer(0);
 * // output: "00:15"
 * formatTimer(15000);
 * // output: "30:15"
 * formatTimer(1815000);
 * // output: "01:30:15"
 * formatTimer(5415000);
 */
const formatTimer = (timeInMs: number): string => {
	if (
		typeof timeInMs !== "number" ||
		timeInMs < 0 ||
		!Number.isInteger(timeInMs) ||
		Number.isNaN(timeInMs)
	) {
		throw new TypeError("Expected parameter to be a natural number.");
	}

	const seconds = Math.floor(timeInMs / 1000);
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;

	let formattedTime = "";

	if (hours > 0) {
		formattedTime += `${hours.toString().padStart(2, "0")}:`;
	}

	formattedTime += `${minutes.toString().padStart(2, "0")}:${remainingSeconds
		.toString()
		.padStart(2, "0")}`;

	return formattedTime;
};

export default formatTimer;
