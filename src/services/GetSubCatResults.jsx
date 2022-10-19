import { API_URL } from "./Settings";

export function GetSubCatResults(catId) {
    return fetch(`${API_URL}/sites/MLA/search?category=${catId}`)
        .then(res => res.json())
        .then(data => { return data.results })
}