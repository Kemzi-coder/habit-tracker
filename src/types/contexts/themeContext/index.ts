import {Theme} from "../../theme";

export interface ThemeContextValue extends Theme {}

export type ThemeContextHook = () => ThemeContextValue;
