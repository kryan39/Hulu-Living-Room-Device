import { fetchHubData } from "./api/fetchData";
import { hubComponent} from "./components/Hub";

export async function initApp() {
    try {
        const appContainer = document.getElementById("app");
        if (!appContainer) {
            throw new Error("App container not found");
        }

        const hubData = await fetchHubData();
        const hubElement = hubComponent(hubData);
        appContainer.appendChild(hubElement);

    } catch (error) {
        console.error("Error initializing app", error);
    }
}