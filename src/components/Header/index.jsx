import { useState, useContext, useEffect } from 'react'
import { useLocation, Link } from 'wouter'
import ProducstIdFromCarrito from '../../context/carritoContext'
import logo from '../../assets/logo-mercadolibre.png'
import homeLogo from '../../assets/home.png'
import flecha from '../../assets/arrow-down.png'
import lupa from '../../assets/lupa.png'
import carrito from '../../assets/carrito.png'
import ubicacion from '../../assets/placeholder.png'
import arrowDown from '../../assets/arrow-down.png'
import user from '../../assets/user.png'
import campana from '../../assets/bell.png'
import './index.css'
import { NavCenter } from '../nav-center'
import { useCategories } from '../../hooks/useEffect-Categories'

export function Header() {
  const [keyword, setKeyword] = useState()
  const [location, setLocation] = useLocation()
  const { productId, setProductId } = useContext(ProducstIdFromCarrito)
  let cantProducts = 0
  for (let i = 0; i < productId.length; i++) {
    const element = productId[i]
    cantProducts = cantProducts += element.cantidad
  }

  const logoFinal = window.screen.width < 500 ? homeLogo : logo
  const handleSearch = (event) => {
    event.preventDefault()
    setLocation(`/search/${keyword}`)
  }
  const handleInput = (event) => {
    setKeyword(event.target.value)
  }
  const deleteInput = () => {
    const inp = document.querySelector('.inp')
    inp.value = ''
  }
  const directCarrito = () => {
    setLocation('/carrito')
  }

  const { categories, loading } = useCategories()
  return (
    <>
      <header className=''>
        <div className='header'>
          <Link href='/ML-copia/' onClick={deleteInput}>
            <img className='logo' src={logoFinal} alt='logo' />
          </Link>
          <div className='form-container'>
            <form onSubmit={handleSearch} className='form'>
              <input onChange={handleInput} placeholder='Buscá lo que queres...' className='inp' />
              <div className='btn-container'>
                <button className='btn'>
                  <img src={lupa} alt='lupa' className='img-lupa' />
                </button>
              </div>
            </form>
          </div>
          <a>
            <img
              src='https://http2.mlstatic.com/D_NQ_957153-MLA69318147677_052023-OO.webp'
              alt='banner'
              className='banner'
            />
          </a>
        </div>

        <section className='second-layer-header'>
          <div className='ubicacion'>
            <img src={ubicacion} alt='ubicacion' className='ubi-img' />
            <div>
              <p>Enviar a</p>
              <span>Tu direccion</span>
            </div>
          </div>

          <NavCenter catDepartment={categories} />

          <nav className='nav-derecha'>
            <div className='nav-derecha-user'>
              <img src={user} alt='profile' className='user-img' />
              <p>Valentin</p>
              <img src={arrowDown} alt='flecha' className='arrow' />
            </div>
            <p>Mis compras</p>
            <div className='nav-derecha-favoritos'>
              <p>Favoritos</p>
              <img src={arrowDown} alt='flecha' className='arrow' />
            </div>
            <img src={campana} alt='campana' className='campana' />
            <div className='carrito-img-btn'>
              <img src={carrito} alt='carrito' className='carrito' onClick={directCarrito} />
              <span className='bubble_count'>{cantProducts === 0 ? '' : cantProducts}</span>
            </div>
          </nav>
        </section>
      </header>
    </>
  )
}
