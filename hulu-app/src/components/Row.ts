import type { Collection } from "../models/types";
import { tileComponent } from "./Tile";

export function rowComponent(collection: Collection, rowIndex: number): HTMLElement {
    const row = document.createElement("section");
    row.className = "row";
    row.setAttribute("data-row-index", rowIndex.toString());

    //builds the title for the row collection and adds it to the row section
    const title = document.createElement("h2");
    title.className = "row-title";
    title.textContent = collection.name;
    row.appendChild(title);

    //creates a div to hold the tiles for the collection and adds it to the row section
    const tiles = document.createElement("div");
    tiles.className = "tiles";
    collection.items.forEach((item, index) => {
        const tile = tileComponent(item, index);
        tiles.appendChild(tile);
     });
    row.appendChild(tiles);

    return row;
}

// each collection reenders as a section with a title and a list of tiles build by tileComponent