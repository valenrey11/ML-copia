import React, { useEffect, useState } from 'react'

import { Product } from '../../components/Product'
import { Spinner } from '../../components/Spinner'
import { GetItemInfo } from '../../services/GetItemInfo'
import { ButtonEl } from '../../components/Button/index.jsx'
import envios from '../../assets/envios.png'
import './index.css'

export function Detail(props) {
  const [product, setProduct] = useState()
  useEffect(() => {
    GetItemInfo(props.params.itemId).then((data) => {
      setProduct(data)
    })
  }, [props.params.itemId])

  return (
    <>
      {product === undefined ? (
        <Spinner />
      ) : (
        <section className='detail-section'>
          <div className='detail-section-content'>
            <div className='detail-card'>
              <Product
                id={product.id}
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
                pictures={product.pictures}
                condition={product.conditions}
              />
            </div>

            <section className='detail-product-info'>
              <div className='condicion-cantidad'>
                <p className='detalles-de-envio-condicion'>
                  {product.condition.charAt().toUpperCase() + product.condition.slice(1)}
                </p>
                <p className='detalles-de-envio-soldQuantity'>{product.soldQuantity} Vendidos</p>
              </div>
              <div className='detalles-de-envio'>
                <img className='detalles-de-envio-carro' src={envios} alt='carrito' />
                <p className='detalles-de-envio-verde'>Llega gratis el miercoles</p>
              </div>
              <p style={{ margin: '5px 0px' }}>Enviar a tu direccion</p>
              <div className='detail-cantidad'>
                <p>Cantidad</p>
                <div className='detail-select'>
                  <select name='cant-prod' id='cant-prod'>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                  </select>
                </div>
              </div>
              <div className='detail-button-section'>
                <ButtonEl
                  text='Comprar ahora'
                  permalink={product.permalink}
                  className='btn-detail-comprar link'
                  title={product.title}
                  id={product.id}
                />
                <ButtonEl
                  title={product.title}
                  text='Agregar al Carro'
                  className='btn-detail-carro'
                  id={product.id}
                />
              </div>
            </section>
          </div>
        </section>
      )}
    </>
  )
}
