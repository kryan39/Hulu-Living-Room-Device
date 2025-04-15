import { appState } from "../store/state";
import { tileComponent } from "../components/tile";

export function updateVisibleTiles(collectionId: string, focusIndex: number): void {
    const row = document.querySelector(`[data-row-id='${collectionId}']`) as HTMLElement;
    if (!row) {
        return;
    }

    const tilesWrapper = row.querySelector<HTMLElement>(".tiles-wrapper");
    if (!tilesWrapper) {
        return;
    }

    tilesWrapper.innerHTML = "";

    const hubData = appState.hubData;
    if (!hubData) {
        return;
    }

    const collection = hubData.components.find((c) => c.id === collectionId);
    if (!collection || !collection.items.length) {
        return;
    }

    const visibleItems = collection.items;
    visibleItems.forEach((item, i) => {
        const tile = tileComponent(item, i, focusIndex);
        tilesWrapper.appendChild(tile);
    });

    const newFocusTile = tilesWrapper.querySelector(`[tabindex='0']`) as HTMLElement;
    newFocusTile?.focus();
}
