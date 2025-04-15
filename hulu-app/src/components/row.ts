import type { Collection } from "../models/types";
import { tileComponent } from "./tile";
import { appState } from "../store/state";

const VISIBLE_TILE_ROW = 6;
const TILE_BUFFER = 2;
const TILE_WINDOW = VISIBLE_TILE_ROW + TILE_BUFFER * 2;
export function rowComponent(collection: Collection): HTMLElement {
    const row = document.createElement("section");
    row.className = "collection-row";
    row.setAttribute("data-row-id", collection.id);

    const title = document.createElement("h2");
    title.className = "collection-title";
    title.textContent = collection.name;
    row.appendChild(title);

    const tilesWrapper = document.createElement("div");
    tilesWrapper.className = "tiles-wrapper";
    row.appendChild(tilesWrapper);

    const { focus } = appState;
    const rowIndex = appState.hubData?.components.findIndex(c => c.id === collection.id) ?? 0;
    const focusIndex = rowIndex === focus.row ? focus.tile : -1;



    collection.items.forEach((item, index) => {
        const tile = tileComponent(item, index, focusIndex);
        tilesWrapper.appendChild(tile);
     });

    return row;
}
