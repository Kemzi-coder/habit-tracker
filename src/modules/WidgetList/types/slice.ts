import {MyWidgetProps} from "../../../UI/MyWidget";

interface Widget extends MyWidgetProps {
	id: string | number;
}

interface WidgetsSlice {
	widgets: Widget[];
	addWidget: (widget: Omit<Widget, "id">) => void;
	deleteWidget: (id: string) => void;
}

export type {Widget, WidgetsSlice};
