import type { Hub } from "../models/types";

export async function fetchHubData(): Promise<Hub> {
    const response = await fetch("https://d1q0vy0v52gyjr.cloudfront.net/hub.json");
    if(!response.ok) throw new Error (`Failed to fetch hub data: ${response.statusText}`);
    const hubData: Hub = await response.json();

    //hydrate an empty collection 
    const hydrationPromises = hubData.components.map(async (collection) => {
        if (collection.items.length === 0 && collection.href) {
            try {
                const response = await fetch(collection.href);
                if (!response.ok) throw new Error("Failed to hydrate collection " + collection.name);
                const hydratedCollection = await response.json();
                collection.items = hydratedCollection.items;
            } catch (error) {
                console.error("Error hydrating collection", error);
            }
        }
    });

    await Promise.all(hydrationPromises);
    return hubData;

}