import type { Collection, Hub } from "../models/types";
import { rowComponent } from "./Row";

export function hubComponent(hubData: Hub): HTMLElement {

    const container = document.createElement("div");
    container.className = "hub-container";

    hubData.components.forEach((collection: Collection, index: number) => {
        const row = rowComponent(collection, index);
        container.appendChild(row);
    });

    return container;
}