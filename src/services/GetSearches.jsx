import { API_URL } from "./Settings";
export function GetSearches(word) {
    return fetch(`${API_URL}/sites/MLA/search?q=${word}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            const { results } = data
            console.log(results);
            const InfoProductosAMostrar = results.map(prod => {
                const title = prod.title
                const id = prod.id
                let thumbnail = prod.thumbnail
                thumbnail = thumbnail.replace('-I.', '-O.');
                const price = prod.price
                return { title, id, thumbnail, price }
            })
            return InfoProductosAMostrar
        })
}