import { useCategories } from "../../hooks/useEffect-Categories";
import { Category } from "../Category";
import { Spinner } from "../Spinner";
import './index.css'

export function ListOfCategories() {
    const { categories, loading } = useCategories()
    if (categories === undefined) return <Spinner />
    const respuesta = loading === true ? <Spinner /> :

        categories.map(cat => {
            return <Category
                id={cat.id}
                nombre={cat.name}
                key={cat.id} />
        })
    return <div className="listOfCat">{respuesta}</div>
}