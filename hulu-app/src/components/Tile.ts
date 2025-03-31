import type { TileItem } from "models/types";

export function tileComponent(item: TileItem, index: number): HTMLElement {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.setAttribute("tabindex", index === 0 ? "0" : "-1"); //omlly the first tile is focused
    tile.setAttribute("role", "button");
    tile.setAttribute("data-tile-id", item.id);
    
    const img = document.createElement("img");
    
    const baseImageUrl= item.visuals.artwork.horizontal_tile?.image.path;
    
    if (baseImageUrl) {
        const separator = baseImageUrl.includes('?') ? '&' : '?';
        img.src = `${baseImageUrl}${separator}size=320x180&format=jpeg`;
        img.alt = item.visuals.headline || "alt-image";
    }

    img.className = "tile-image";

    const title = document.createElement("div");
    title.className = "tile-title";
    title.textContent = item.visuals.headline;

    tile.appendChild(img);
    tile.appendChild(title);

    return tile;
}