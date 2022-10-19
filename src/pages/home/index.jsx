import { ListOfProducts } from "../../components/ListOfProduct"
import { ListOfCategories } from "../../components/ListOfCategories";
import './index.css'


export function Home() {
    return <>
        <section className="products-section">
            <div>
                <ListOfCategories />
            </div>
            <div className="products-list">
                <ListOfProducts />
            </div>
        </section>
    </>
}