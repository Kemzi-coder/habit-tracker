import {create} from "zustand";
import {nanoid} from "nanoid";
import {WidgetsSlice} from "../types/slice";

const useWidgetsStore = create<WidgetsSlice>()(set => ({
	widgets: [
		{
			id: 1,
			variant: "counter",
			widgetProps: {initialValue: 5, title: "Counter"}
		},
		{
			id: 2,
			variant: "timer",
			widgetProps: {initialTimeInMs: 5000}
		}
	],
	addWidget: widget =>
		set(state => ({widgets: [...state.widgets, {id: nanoid(), ...widget}]})),
	deleteWidget: id =>
		set(state => ({widgets: state.widgets.filter(item => item.id !== id)}))
}));

const useWidgets = () => useWidgetsStore(state => state.widgets);

const useAddWidget = () => useWidgetsStore(state => state.addWidget);

const useDeleteWidget = () => useWidgetsStore(state => state.deleteWidget);

export {useWidgets, useDeleteWidget, useAddWidget};
