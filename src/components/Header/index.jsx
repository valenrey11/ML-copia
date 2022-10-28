import { useState } from "react";
import { useLocation, Link } from "wouter";
import ProducstIdFromCarrito from "../../context/carritoContext";
import logo from '../../assets/logo-mercadolibre.png'
import homeLogo from '../../assets/home.png'
import flecha from '../../assets/arrow-down.png'
import lupa from '../../assets/lupa.png'
import carrito from '../../assets/carrito.png'
import './index.css'
import { useContext } from "react";


export function Header() {
    const [keyword, setKeyword] = useState()
    const [location, setLocation] = useLocation();
    const { productId, setProductId } = useContext(ProducstIdFromCarrito)
    console.log(productId);

    let cantProducts = 0
    for (let i = 0; i < productId.length; i++) {
        const element = productId[i];
        console.log(element.cantidad);
        cantProducts = cantProducts += element.cantidad
        console.log(cantProducts);

    }


    const logoFinal = window.screen.width < 500 ? homeLogo : logo
    const handleSearch = (event) => {
        event.preventDefault()
        setLocation(`/search/${keyword}`)
    }
    const handleInput = (event) => {
        setKeyword(event.target.value)
    };
    const deleteInput = () => {
        const inp = document.querySelector('.inp')
        inp.value = ''
    };
    const directCarrito = () => {
        setLocation(`/carrito`)
    }
    const showCategories = () => {
        const categorias = document.querySelector('.list-of-cat')
        console.log(categorias);
        if (window.screen.width < 500) {
            if (categorias.classList.contains('show-of')) {
                categorias.classList.remove('show-of')
                categorias.classList.add('show-on')
            } else
                if (categorias.classList.contains('show-on')) {
                    categorias.classList.remove('show-on')
                    categorias.classList.add('show-of')
                }

        }

    }
    return <>
        <header className="header">
            <Link href={'/ML-copia/'} onClick={deleteInput}>
                <img className="logo" src={logoFinal} alt="logo" />
            </Link>
            <form onSubmit={handleSearch} className="form">
                <input onChange={handleInput} placeholder='Buscá lo que queres...' className="inp" />
                <div className="btn-container">
                    <button className="btn" >
                        <img src={lupa} alt="lupa" className="img-lupa" />
                    </button>
                </div>
            </form>
            <p className="ofertas">Ofertas por tiempo limitado</p>
            <div className="number-carrito">
                <span className="span">{cantProducts === 0 ? '' : cantProducts}</span>
                <img src={carrito} alt="carro" className="carrito" onClick={directCarrito} />
            </div>

        </header>
        <div className="cat-wrapper" onClick={showCategories}>
            <p className="category-list" >Categorias</p>
            <img className="flecha" src={flecha} alt="flecha" />
        </div>
    </>
}