import { ListOfProducts } from "../../components/ListOfProduct"
import { ListOfCategories } from "../../components/ListOfCategories";
export function SearchResults({ params }) {
    const { keyword } = params
    return <>
        <section className="products-section">
            <div>
                <ListOfCategories />
            </div>
            <div className="products-list">
                <ListOfProducts keyword={keyword} />
            </div>
        </section>
    </>
}