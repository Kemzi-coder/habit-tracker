import formatTimer from "./formatTimer";

describe("formatTimer", () => {
	it("should return the formatted time when given a valid input", () => {
		expect(formatTimer(150000)).toEqual("02:30");
		expect(formatTimer(3600000)).toEqual("01:00:00");
		expect(formatTimer(0)).toEqual("00:00");
		expect(formatTimer(43210000)).toEqual("12:00:10");
	});

	it("should throw a type error when given an invalid input", () => {
		expect(() => formatTimer(-100)).toThrow(TypeError);
		expect(() => formatTimer(NaN)).toThrow(TypeError);
		expect(() => formatTimer(undefined)).toThrow(TypeError);
		expect(() => formatTimer(10.5)).toThrow(TypeError);
	});
});
