import { useEffect, useState, useContext } from 'react'
import { ListOfCategories } from '../../components/ListOfCategories'
import { ListOfProducts } from '../../components/ListOfProduct'
import { GetSubCatResults } from '../../services/GetSubCatResults'

import ProductsContext from '../../context/keywordContext'
import './index.css'
export function PageCategories(props) {
  let { products, setProducts } = useContext(ProductsContext)
  products = undefined
  // const [products, setProducts] = useState([])
  const subCatId = props.params.subCatId
  useEffect(() => {
    GetSubCatResults(subCatId).then((data) => {
      setProducts(data)
    })
  }, [subCatId])
  return (
    <>
      <section className='products-section'>
        <ListOfCategories />
        <div className='products-list'>
          <ListOfProducts />
        </div>
      </section>
    </>
  )
}
