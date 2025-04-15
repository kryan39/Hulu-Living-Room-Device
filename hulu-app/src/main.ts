import { appState } from "./store/state";
import { fetchHubData } from "./api/fetchData";
import { setupKeyboardNavigation } from "./utils/keyboard";
import { hubComponent} from "./components/hub";

export async function initApp() {
    try {

        const hubData = await fetchHubData();
        appState.hubData = hubData;

        if(hubData.components?.[0]?.items?.length > 0){
            appState.focus.row = 0;
            appState.focus.tile = 0;    
        }

        const appContainer = document.getElementById("app");
        if (!appContainer) {
            return;
        }

        const hubElement = hubComponent(hubData);
        appContainer.innerHTML = "";
        appContainer.appendChild(hubElement);
        setupKeyboardNavigation();

        requestAnimationFrame(() => {
            const firstTile = document.querySelector(".tile[tabindex='0']") as HTMLElement;
            firstTile?.focus();
        });


    } catch (error) {
        throw new Error(`Failed to initialize app: ${error}`);
    }
}

initApp();