import { Hub } from "../models/types";

interface FocusPosition {
    row: number;
    tile: number;
}

export const appState: {
    hubData: Hub | null;
    focus: {row: number; tile: number};
    modal: HTMLElement | null;
    loadedCollections: Map<string, any>;
    } = {
        hubData: null,
        focus: { row: 0, tile: 0},
        modal: null,
        loadedCollections: new Map()
}