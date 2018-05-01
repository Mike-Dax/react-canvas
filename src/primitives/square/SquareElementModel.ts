import { CanvasElementModel } from "../../models-canvas/CanvasElementModel";
import { Rectangle } from "../../geometry/Rectangle";
import { CanvasEngine } from "../../CanvasEngine";
import { BaseModel, DeserializeEvent } from "../../models/BaseModel";

export class SquareElementModel extends CanvasElementModel {
	border: number;
	borderColor: string;
	background: string;
	dimensions: Rectangle;

	constructor() {
		super("square");
		this.border = 2;
		this.borderColor = "black";
		this.background = "rgb(0,192,255)";
		this.dimensions = new Rectangle(0, 0, 100, 100);
		this.selected = false;
	}

	serialize() {
		return {
			...super.serialize(),
			dimensions: this.dimensions.serialize()
		};
	}

	deSerialize(event: DeserializeEvent): void {
		super.deSerialize(event);
		this.dimensions.deserialize(event.data["dimensions"]);
	}

	getDimensions(): Rectangle {
		return this.dimensions;
	}

	setDimensions(dimensions: Rectangle) {
		this.dimensions = dimensions;
	}
}
