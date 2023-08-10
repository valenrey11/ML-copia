import { useEffect, useContext, useState } from 'react'
import { GetSearches } from '../services/GetSearches'
import ProductsContext from '../context/keywordContext'
export function useProducts(keyword) {
  const { products, setProducts } = useContext(ProductsContext)
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const keywordToUse = keyword || 'electronica'
    GetSearches(keywordToUse).then((data) => {
      setProducts(data)
      setLoading(false)
      localStorage.setItem('keywordProduct', keyword)
    })
  }, [setProducts, keyword])
  return { products, loading }
}
