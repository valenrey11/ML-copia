import { useLocation } from 'wouter'
import { Slider } from '../Slider'
import './index.css'
import { useEffect, useRef } from 'react'
export function Product({ title, id, thumbnail, price, pictures }) {
  const [location, setLocation] = useLocation()
  const productCardRef = useRef(null)
  const updateProductCardClass = (location) => {
    if (location === '/ML-copia' || location === '/ML-copia/') {
      productCardRef.current.classList.add('product-card')
    }
  }

  useEffect(() => {
    updateProductCardClass(location)
  }, [])

  const handleDetail = () => {
    const route = `/detail/${id}`
    setLocation(route)
  }
  return (
    <div className='prod product-card-banner' ref={productCardRef} onClick={handleDetail}>
      <div className='product-item'>
        <div className='product-item-img-container' style={{ margin: '0 auto' }}>
          {pictures === undefined ? (
            <img className='product-item-img' alt='thumbnail' src={thumbnail} />
          ) : (
            <div style={{ width: '100%', height: '100%' }}>
              <Slider pictures={pictures} />
            </div>
          )}
        </div>
        <div className='product-item-info'>
          <h4 style={{ margin: '5px 0px' }} className='product-item-price'>
            ${price}{' '}
          </h4>
          <h4 className='product-item-title'>{title}</h4>
        </div>
      </div>
    </div>
  )
}
