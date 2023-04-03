import {Theme} from "../utils/theme";

export interface ThemeContextValue extends Theme {}

export type ThemeContextHook = () => ThemeContextValue;
