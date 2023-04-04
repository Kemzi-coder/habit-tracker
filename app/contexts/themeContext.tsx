import {Context, createContext, useContext} from "react";
import {
	ThemeContextHook,
	ThemeContextValue
} from "../types/contexts/themeContext";
import {theme} from "../utils/theme";

const themeContext: Context<ThemeContextValue> = createContext({...theme});

/** Hook, that returns the current theme value. */
const useThemeContext: ThemeContextHook = () => useContext(themeContext);

// eslint-disable-next-line import/prefer-default-export
export {useThemeContext};
