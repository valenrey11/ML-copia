import { useProducts } from '../../hooks/useEffect-Products'
import { Product } from '../Product'
import { Spinner } from '../Spinner'
import './index.css'

export function ListOfProducts ({ keyword }) {
  const { products, loading } = useProducts(keyword)
  const respuesta = loading === true
    ? <Spinner />
    : products.map(x => {
      return (
        <Product
          key={x.id}
          title={x.title}
          id={x.id}
          thumbnail={x.thumbnail}
          price={x.price}
        />
      )
    })
  return respuesta
}
