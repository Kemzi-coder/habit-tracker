import {useContext} from "react";
import themeContext from "../../contexts/themeContext/themeContext";
import {ThemeContextHook} from "../../types/theme";

/** Hook, that returns the current theme value. */
const useThemeContext: ThemeContextHook = () => useContext(themeContext);

export default useThemeContext;
