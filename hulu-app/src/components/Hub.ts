import type { Collection, Hub } from "../models/types";
import { rowComponent } from "./Row";

export function hubComponent(hubData: Hub): HTMLElement {

    const container = document.createElement("div");
    container.className = "hub-container";

    //maping through the collections and creating a row component for each collection containing the collection title and a list of tiles for each item in the collection
    hubData.components.forEach((collection: Collection, index: number) => {
        const row = rowComponent(collection, index);
        container.appendChild(row);
    });

    return container;
}