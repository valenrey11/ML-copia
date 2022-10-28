import { API_URL } from "./Settings";

export function GetItemInfo(id) {
    return fetch(`${API_URL}/items?ids=${id}`)
        .then(res => res.json())
        .then(data => {
            const results = data[0].body
            const title = results.title
            const id = results.id
            const thumbnail = results.thumbnail
            const price = results.price
            const condition = results.condition
            const soldQuantity = results.sold_quantity
            const permalink = results.permalink
            const pictures = results.pictures.map(pic => {
                return pic.url
            })
            return { title, id, thumbnail, price, condition, soldQuantity, permalink, pictures }
        })

}