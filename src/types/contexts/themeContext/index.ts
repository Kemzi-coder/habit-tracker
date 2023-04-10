import {Theme} from "types/theme";

export interface ThemeContextValue extends Theme {}

export type ThemeContextHook = () => ThemeContextValue;
