import type { Collection, Hub } from "../models/types";

import { rowComponent } from "./row";
export function hubComponent(hubData: Hub): HTMLElement {

    const container = document.createElement("div");
    container.className = "hub-container";

    const huluHeader = document.createElement("div");
    huluHeader.className = "hulu-header";
    huluHeader.textContent = "Hulu";
    container.appendChild(huluHeader);


    hubData.components.forEach((collection: Collection) => {
        const row = rowComponent(collection);
        container.appendChild(row);
    });

    return container;
}

