interface WindowRange {
    start: number;
    end: number;
}

const TILE_BUFFER = 2;
const TILE_WINDOW = 6 + TILE_BUFFER * 2;

const currentWindow: Map<string, WindowRange> = new Map();

export function shouldUpdateTileWindow(
    collectionId: string,
    focusIndex: number,
    totalTiles: number
): boolean {
    const window = currentWindow.get(collectionId);

    if (!window) {
        const newRange = calculateWindow(focusIndex, totalTiles);
        currentWindow.set(collectionId, newRange);
        return true;
    }

    if (focusIndex < window.start || focusIndex >= window.end) {
        const newRange = calculateWindow(focusIndex, totalTiles);
        currentWindow.set(collectionId, newRange);
        return true;
    }

    return false;
}

function calculateWindow(focusIndex: number, total: number): WindowRange {
    const start = Math.max(0, focusIndex - TILE_BUFFER);
    const end = Math.min(total, start + TILE_WINDOW);
    return { start, end };
}

export function getCurrentWindow(collectionId: string): WindowRange | undefined {
    return currentWindow.get(collectionId);
}
