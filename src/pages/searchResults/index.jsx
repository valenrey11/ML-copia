import { ListOfProducts } from '../../components/ListOfProduct'
import './index.css'
export function SearchResults({ params }) {
  const { keyword } = params
  return (
    <>
      <section className='products-section-search-result'>
        <div className='products-list'>
          <ListOfProducts keyword={keyword} />
        </div>
      </section>
    </>
  )
}
