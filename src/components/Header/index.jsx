import { useState } from "react";
import { useLocation, Link } from "wouter";
import logo from '../../assets/logo-mercadolibre.png'
import homeLogo from '../../assets/home.png'
import lupa from '../../assets/lupa.png'
import carrito from '../../assets/carrito.png'
import './index.css'


export function Header() {
    const [keyword, setKeyword] = useState()
    const [location, setLocation] = useLocation();
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
    return <header className="header">
        <Link href={'/ML-copia/'} onClick={deleteInput}>
            {console.log(window.innerWidth)}
            <img className="logo" src={window.innerWidth < 500 ? homeLogo : logo} alt="logo" />
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
        <img src={carrito} alt="carro" className="carrito" onClick={directCarrito} />
    </header>
}