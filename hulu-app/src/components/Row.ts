import type { Collection } from "../models/types";
import { tileComponent } from "./Tile";

const VISIBLE_TILE_ROW = 6;
const TILE_BUFFER = 2;
const TILE_WINDOW = VISIBLE_TILE_ROW + TILE_BUFFER * 2;
export function rowComponent(collection: Collection, rowIndex: number): HTMLElement {
    const row = document.createElement("section");
    row.className = "collection-row";
    row.setAttribute("data-row-index", collection.id);

    //builds the title for the row collection and adds it to the row section
    const title = document.createElement("h2");
    title.className = "collection-title";
    title.textContent = collection.name;
    row.appendChild(title);

    const tilesWrapper = document.createElement("div");
    tilesWrapper.className = "tiles-wrapper";
    row.appendChild(tilesWrapper);

    //creates a div to hold the tiles for the collection and adds it to the row section
    //only takes the first 6 tiles of the colelction to display. will add a scroll feature to view more tiles.
    const initialTiles = collection.items.slice(0, TILE_WINDOW);
    initialTiles.forEach((item, index) => {
        const tile = tileComponent(item, index);
        tilesWrapper.appendChild(tile);
     });

    return row;
}

// each collection reenders as a section with a title and a list of tiles build by tileComponent
//row component takes a collection and an index and returns a section element with a title and a list of tiles based on where the user is and navigation in windoq
//the row component is used in the hub component to render the collections