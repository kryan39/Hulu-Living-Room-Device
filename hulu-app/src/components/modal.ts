import type { TileItem } from "../models/types";
import { appState } from "../store/state";

export function createModal(item: TileItem): HTMLElement {
    const overlay = document.createElement("div");
    overlay.className = "modal-overlay";

    const modal = document.createElement("div");
    modal.className = "modal";
    modal.setAttribute("model", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", item.visuals.headline || "Modal");

    const baseImageUrl = item.visuals.artwork?.horizontal_tile?.image?.path;

    if (baseImageUrl) {
        const separator = baseImageUrl.includes("?") ? "&" : "?";
        const imageUrl = `${baseImageUrl}${separator}size=1280x720&format=jpeg`;
        const backgroundImage = new Image();
        backgroundImage.src = imageUrl;

        backgroundImage.onload = () => {
            modal.style.backgroundImage = `url(${imageUrl})`;
            modal.style.backgroundSize = "cover";
            modal.style.backgroundPosition = "center";
            modal.style.backgroundRepeat = "no-repeat";
        };

        backgroundImage.onerror = () => {
            modal.classList.add("modal-no-image");
        };
    } else {
        modal.classList.add("modal-no-image");
    }

    const title = document.createElement("h3");
    title.textContent = item.visuals.headline || "Untitled";
    modal.appendChild(title);

    const metadata = document.createElement("div");
    metadata.className = "modal-metadata";
    const rating = item.entity_metadata?.rating?.code;
    const year = item.entity_metadata?.premiere_date?.split("-")[0];
    const genres = item.entity_metadata?.genre_names?.slice(0, 2)?.join(" • ");
    metadata.textContent = [rating, genres, year].filter(Boolean).join(" • ");
    modal.appendChild(metadata);

    const subtitle = document.createElement("p");
    subtitle.textContent = item.visuals.subtitle || "";
    modal.appendChild(subtitle);

    const description = document.createElement("p");
    description.textContent = item.visuals.body || "";
    modal.appendChild(description);

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.className = "modal-close";
    closeButton.setAttribute("tabindex", "0");
    closeButton.setAttribute("aria-label", "Close modal");
    closeButton.onclick = () => closeModal();
    modal.appendChild(closeButton);

    overlay.appendChild(modal);
    document.body.appendChild(overlay);
    appState.modal = overlay;

    requestAnimationFrame(() => {
        modal.classList.add("modal-open");
        closeButton.focus();
    });

    return overlay;
}

export function closeModal(): void {
    if (appState.modal) {
        appState.modal.remove();
        appState.modal = null;
    }
}
