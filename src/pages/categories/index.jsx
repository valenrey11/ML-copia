import { useEffect, useState } from "react";
import { ListOfCategories } from "../../components/ListOfCategories";
import { ListOfProducts } from "../../components/ListOfProduct";
import { GetSubCatResults } from "../../services/GetSubCatResults";
import { useContext } from "react";
import ProductsContext from "../../context/keywordContext";
export function PageCategories(props) {
    let { products, setProducts } = useContext(ProductsContext)
    console.log(products);
    products = undefined
    console.log(products);
    // const [products, setProducts] = useState([])
    const subCatId = props.params.subCatId
    useEffect(() => {
        GetSubCatResults(subCatId).then(data => {
            setProducts(data)
        })
    }, [subCatId])
    return <>
        <section className="products-section">
            <div>
                <ListOfCategories />
            </div>
            <div className="products-list">
                <ListOfProducts />
            </div>
        </section>
        {/* {console.log(products)} */}
    </>
}