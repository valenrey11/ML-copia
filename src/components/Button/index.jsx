import React, { useContext } from 'react'
import { useEffect } from 'react'
import ProducstIdFromCarrito from '../../context/carritoContext'
import './index.css'
export function ButtonEl({ text, className, title, id }) {
    const { productId, setProductId } = useContext(ProducstIdFromCarrito)
    const buy = () => {
        alert(`Felicidades compraste ${title}`)
    }
    const AddCarrito = () => {
        const cantidad = document.getElementById('cant-prod')
        const hola = { id, cantidad: cantidad.value }
        if (productId.length === 0) {
            setProductId(id)
        }
        setProductId([...productId, hola])
    }

    if (title === undefined) {
        return <>
            <button
                onClick={AddCarrito}
                className={`btn-detail ${className}`}
            >{text}</button>
        </>
    }
    return <>
        <button
            onClick={buy}
            className={`btn-detail ${className}`}
        >{text}</button>
    </>
}
