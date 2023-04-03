export interface ColorPalette {
	orange: string;
	white: string;
	gray: string;
	lightGray: string;
	darkGray: string;
}

export interface Theme {
	colors: {
		background: string;
		foreground: string;
		primary: string;
		primaryLight: string;
		accent: string;
	};
	spacing: {
		s: number;
		m: number;
		l: number;
		xl: number;
	};
	textVariants: {
		header: {
			fontSize: number;
			fontFamily: string;
			fontWeight: string;
		};
		body: {
			fontSize: number;
			fontFamily: string;
			fontWeight: string;
		};
	};
}
