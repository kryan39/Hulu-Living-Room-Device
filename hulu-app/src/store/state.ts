import { Hub } from "../models/types";

interface FocusPosition {
    row: number;
    tile: number;
}

export const appState: {
    hubData: Hub | null;
    focusPosition: FocusPosition | null;
    modal: any;
    loadedCollections: Map<string, any>;
    } = {
        hubData: null,
        focusPosition: { row: 0, tile: 0},
        modal: null,
        loadedCollections: new Map()
}