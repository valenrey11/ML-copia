import { API_URL } from './Settings'

export function GetSubCategories (catId) {
  return fetch(`${API_URL}/categories/${catId}`)
    .then(res => res.json())
    .then(data => { return data.children_categories })
}
