import type { Collection } from "../models/types";

export function rowComponent(collection: Collection, rowIndex: number): HTMLElement {
    const row = document.createElement("div");
    row.className = "row";
    row.setAttribute("data-row-index", rowIndex.toString());

    const title = document.createElement("h2");
    title.className = "row-title";
    title.textContent = collection.name;
    row.appendChild(title);

    // const tiles = document.createElement("div");
    // tiles.className = "tiles";
    // collection.items.forEach((item, index) => {
    //     const tile = tileComponent(item, index);
    //     tiles.appendChild(tile);
    // });
    // row.appendChild(tiles);

    return row;
}