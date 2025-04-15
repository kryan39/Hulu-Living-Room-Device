import type { TileItem } from "models/types";

export function tileComponent(item: TileItem, index: number, focusIndex: number): HTMLElement {
    const tile = document.createElement("div");
    tile.className = "tile";
    tile.setAttribute("tabindex", index === focusIndex ? "0" : "-1");
    tile.setAttribute("role", "button");
    tile.setAttribute("data-tile-id", item.id);
    
    const baseImageUrl= item.visuals.artwork?.horizontal_tile?.image?.path;
    const imageUrl = baseImageUrl ? `${baseImageUrl}${baseImageUrl.includes("?") ? "&" : "?"}size=320x180&format=jpeg`: null;
    
    const createFallback = () => {
        const fallback = document.createElement("div");
        fallback.className = "tile-logo-fallback";
        fallback.textContent = "hulu";
        return fallback;
    };

    if (imageUrl) {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = item.visuals.headline || "Preview";
        img.className = "tile-image";        
        
        img.onerror = () => {
            img.remove();
            tile.appendChild(createFallback());
        };
        tile.appendChild(img);

    } else {
        tile.appendChild(createFallback());
    }

    const title = document.createElement("div");
    title.className = "tile-title";
    title.textContent = item.visuals.headline;
    tile.appendChild(title);

    return tile;
}