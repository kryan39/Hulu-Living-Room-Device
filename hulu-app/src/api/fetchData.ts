import type { Hub } from "../models/types";

export async function fetchHubData(): Promise<Hub> {
    const response = await fetch("https://d1q0vy0v52gyjr.cloudfront.net/hub.json");
    if(!response.ok) throw new Error (`Failed to fetch hub data: ${response.statusText}`);
    return await response.json();

}