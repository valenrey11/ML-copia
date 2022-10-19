import React, { useEffect, useContext } from "react"
import { useState } from "react";
import { ButtonEl } from "../../components/Button";
import { Spinner } from "../../components/Spinner";
import ProducstIdFromCarrito from '../../context/carritoContext'
import { GetItemInfo } from "../../services/GetItemInfo";
import './index.css'

export function Carrito() {
    const { productId, setProductId } = useContext(ProducstIdFromCarrito)
    const [products, setProducts] = useState([])
    useEffect(() => {
        productId.map(obj => {
            GetItemInfo(obj.id).then(res => {
                res.cantidad = obj.cantidad
                setProducts(prev => ([...prev, res]))
            })
        })
    }, [])

    const finalProducts = products.map(pro => {
        return <div className="wrapper" key={pro.title}>
            <img className="img" src={pro.thumbnail} alt="kcyo" />
            <div className="info-cont">
                <p className="title">{pro.title}</p>
                <div style={{ display: "flex", alignItems: 'center', gap: '30px' }}>
                    <p className="price">${pro.price}</p>
                    <p className="cant">cantidad: {pro.cantidad}</p>
                </div>
            </div>
        </div >
    })
    for (let i = 0; i < finalProducts.length; i++) {
        const primary = finalProducts[i];
        for (let j = i + 1; j < finalProducts.length; j++) {
            const secondary = finalProducts[j];
            if (primary.key === secondary.key) {
                finalProducts.splice(j, 1);
            }

        }
    }
    for (let i = 0; i < products.length; i++) {
        const primary = products[i];
        for (let j = i + 1; j < products.length; j++) {
            const secondary = products[j];
            if (primary.title === secondary.title) {
                products.splice(j, 1);
            }

        }
    }

    let suma = 0
    for (let i = 0; i < products.length; i++) {
        const element = products[i];
        suma = suma += element.price * element.cantidad
    }


    return <>{products === undefined ? <Spinner /> : <div>
        <h2>Este es el carrito</h2>
        <p>Y estos son tus productos:</p>
        <div className="products-container">
            {finalProducts}
        </div>

        <div className="compra">
            <h4 className="total">El total de tu compra es: ${suma}</h4>
            <ButtonEl text='Finalizar compra' className='btn-detail-comprar' />
        </div>
    </div>
    }
    </>

}