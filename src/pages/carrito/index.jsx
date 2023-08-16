import React, { useEffect, useContext, useState } from 'react'

import { ButtonEl } from '../../components/Button'
import { Spinner } from '../../components/Spinner'
import ProducstIdFromCarrito from '../../context/carritoContext'
import { GetItemInfo } from '../../services/GetItemInfo'
import trash from '../../assets/trash.png'
import './index.css'

export function Carrito() {
  const { productId, setProductId } = useContext(ProducstIdFromCarrito)
  const [products, setProducts] = useState([])
  useEffect(() => {
    productId.map((obj) => {
      return GetItemInfo(obj.id).then((res) => {
        res.cantidad = obj.cantidad
        setProducts((prev) => [...prev, res])
      })
    })
  }, [])

  const deleteFromCarrito = (params) => {
    const idASacar = params.target.id
    const productsIdFiltrado = productId.filter((obj) => {
      return obj.id !== idASacar
    })
    const productsFiltrado = products.filter((obj) => {
      return obj.id !== idASacar
    })
    setProducts(productsFiltrado)
    setProductId(productsIdFiltrado)
  }

  const finalProducts = products.map((pro) => {
    return (
      <div className='wrapper' key={pro.title}>
        <img className='img' src={pro.thumbnail} alt='kcyo' />
        <div className='info-cont'>
          <p className='title'>{pro.title}</p>
          <div className='sub-info-container'>
            <p className='price'>${pro.price}</p>
            <p className='cant'>cantidad: {pro.cantidad}</p>
            <img
              className='trash-bin'
              src={trash}
              alt='trash bin'
              onClick={deleteFromCarrito}
              id={pro.id}
            />
          </div>
        </div>
      </div>
    )
  })
  for (let i = 0; i < finalProducts.length; i++) {
    const primary = finalProducts[i]
    for (let j = i + 1; j < finalProducts.length; j++) {
      const secondary = finalProducts[j]
      if (primary.key === secondary.key) {
        finalProducts.splice(j, 1)
      }
    }
  }
  for (let i = 0; i < products.length; i++) {
    const primary = products[i]
    for (let j = i + 1; j < products.length; j++) {
      const secondary = products[j]
      if (primary.title === secondary.title) {
        products.splice(j, 1)
      }
    }
  }

  let suma = 0
  for (let i = 0; i < products.length; i++) {
    const element = products[i]
    suma = suma += element.price * element.cantidad
  }

  return (
    <>
      {products === undefined ? (
        <Spinner />
      ) : (
        <div className='product-page'>
          <h3>Este es el carrito</h3>
          <p>Y estos son tus productos:</p>
          <div className='products-container'>{finalProducts}</div>

          <div className='compra'>
            <h4 className='total'>El total de tu compra es: ${suma}</h4>
            <ButtonEl text='Finalizar compra' className='btn-detail-comprar finalizar-compra' />
          </div>
        </div>
      )}
    </>
  )
}
