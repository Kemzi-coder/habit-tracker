import {Context, createContext} from "react";
import {ThemeContextValue} from "../../types/theme";
import {theme} from "../../constants/theme";

const themeContext: Context<ThemeContextValue> = createContext({...theme});

export default themeContext;
