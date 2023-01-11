import { API_URL } from "./Settings";
export function GetSearches(word) {
    return fetch(`${API_URL}/sites/MLA/search?q=${word}`)
        .then(res => res.json())
        .then(data => {
            const { results } = data
            const InfoProductosAMostrar = results.map(prod => {
                const title = prod.title
                const id = prod.id
                let thumbnail = prod.thumbnail
                thumbnail = thumbnail.replace('-I.', '-O.');
                const price = prod.prices.prices[0].amount
                return { title, id, thumbnail, price }
            })
            return InfoProductosAMostrar
        })
}