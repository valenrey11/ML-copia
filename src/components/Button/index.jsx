import React, { useContext } from 'react'
import ProducstIdFromCarrito from '../../context/carritoContext'
import './index.css'
export function ButtonEl({ text, className, title, id, permalink }) {
    const { productId, setProductId } = useContext(ProducstIdFromCarrito)
    const redirectToML = () => {
        window.open(permalink, "_blank")

    }
    const AddCarrito = () => {
        const cantidad = document.getElementById('cant-prod')
        const productoAAñadir = { id, cantidad: cantidad.value * 1 }
        if (productId.length === 0) {
            setProductId(id)
        }
        setProductId([...productId, productoAAñadir])
        alert(`${title} Ha sido añadido a tu carrito`)
    }
    if (className.includes('btn-detail-carro')) { //no tiene titulo porque para agregar al carrito no necesitso
        return <>
            <button
                onClick={AddCarrito}
                className={`btn-detail ${className}`}
            >{text}</button>
        </>
    }
    if (text.includes('Finalizar compra')) { //no tiene titulo porque para agregar al carrito no necesitso
        return <>
            <button
                onClick={() => { alert('Felicidades! Finalizaste tu compra!') }}
                className={`btn-detail ${className}`}
            >{text}</button>
        </>
    }

    return <>
        <button
            onClick={redirectToML}
            className={`btn-detail ${className}`}
        >{text}</button>
    </>
}
