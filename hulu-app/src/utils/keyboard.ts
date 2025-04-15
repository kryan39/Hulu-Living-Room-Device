import { appState } from "../store/state";
import { updateVisibleTiles } from "./tileWindowManager";
import { createModal, closeModal } from "../components/modal";
import { shouldUpdateTileWindow } from "./windowController";

export function setupKeyboardNavigation(): void {
    document.addEventListener("keydown", handleNavigation);
}

async function handleNavigation(e: KeyboardEvent): Promise<void> {
    const { focus: navFocus, hubData, modal } = appState;

    if (modal) {
        const trapKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Tab"];
        const exitKeys = ["Escape", "Backspace", "Enter"];
        if (trapKeys.includes(e.key)) {
            e.preventDefault();
        }
        if (exitKeys.includes(e.key)) {
            if (e.key === "Enter" && document.activeElement?.classList.contains("modal-close")) {
                closeModal();
            } else if (e.key === "Escape" || e.key === "Backspace") {
                closeModal();
            }
        }
        return;
    }

    if (!hubData) return;

    const collection = hubData.components[navFocus.row];
    if (!collection || !collection.items.length) return;

    switch (e.key) {
        case "ArrowRight":
            if (navFocus.tile < collection.items.length - 1) {
                navFocus.tile += 1;
            } else if (navFocus.row < hubData.components.length - 1) {
                navFocus.row += 1;
                navFocus.tile = 0;
            }
            break;
        case "ArrowLeft":
            if (navFocus.tile > 0) {
                navFocus.tile -= 1;
            } else if (navFocus.row > 0) {
                navFocus.row -= 1;
                const previousCollection = hubData.components[navFocus.row];
                navFocus.tile = previousCollection.items.length - 1;
            }
            break;
        case "ArrowDown":
            navFocus.row = Math.min(navFocus.row + 1, hubData.components.length - 1);
            navFocus.tile = 0;
            break;
        case "ArrowUp":
            navFocus.row = Math.max(navFocus.row - 1, 0);
            navFocus.tile = 0;
            break;
        case "Enter":
            const focusedTile = collection.items[navFocus.tile];
            if (focusedTile) {
                createModal(focusedTile);
                return;
            }
            break;
        default:
            return;
    }

    const currentCollection = hubData.components[navFocus.row];
    const currentCollectionId = currentCollection.id;

    if (shouldUpdateTileWindow(currentCollectionId, navFocus.tile, currentCollection.items.length)) {
        updateVisibleTiles(currentCollectionId, navFocus.tile);
    } else {
        const rowElement = document.querySelector(`[data-row-id="${currentCollectionId}"]`);
        const tiles = rowElement?.querySelectorAll(".tile") || [];
        tiles.forEach((tile, i) => {
            tile.setAttribute("tabindex", i === navFocus.tile ? "0" : "-1");
        });

        requestAnimationFrame(() => {
            const activeTile = tiles[navFocus.tile] as HTMLElement;
            activeTile?.focus();
        });
    }

    const currentRow = document.querySelector(`[data-row-id="${collection.id}"]`);
    const tilesWrapper = currentRow?.querySelector(".tiles-wrapper") as HTMLElement;

    if (tilesWrapper) {
        const TILE_WIDTH = 300; // Adjust this value based on your tile width
        const TILE_GAP = 40; // Adjust this value based on your tile gap
        const tileWithGap = TILE_WIDTH + TILE_GAP;
        const visibleTilesCount = Math.floor(tilesWrapper.offsetWidth / tileWithGap);
        const maxOffset = Math.max(0, collection.items.length - visibleTilesCount);
        const offset = Math.min(navFocus.tile, maxOffset) * tileWithGap;

        tilesWrapper.style.transform = `translateX(-${offset}px)`;
    }
}
