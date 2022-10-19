import { API_URL } from "./Settings";
export function GetCategories() {
    return fetch(`${API_URL}/sites/MLA/categories`)
        .then(res => res.json())
        .then(data => { return data })

}

