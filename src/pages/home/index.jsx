import 'react-slideshow-image/dist/styles.css'
import './index.css'
import { Slider } from '../../components/Slider'
import { MiniServicios } from '../../components/MiniServicios'
import { ListOfProducts } from '../../components/ListOfProduct'
import { ProductSlider } from '../../components/ProductSlider'
import { Suscribete } from '../../components/Suscribete'
import { BeneficiosMercadoPuntos } from '../../components/BeneficiosMercadoPuntos'
const PICTURES = [
  'https://http2.mlstatic.com/D_NQ_882988-MLA70390413574_072023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_702182-MLA70435050360_072023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_741888-MLA70436324554_072023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_824932-MLA70415769211_072023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_602468-MLA70390407068_072023-OO.webp',
  'https://http2.mlstatic.com/D_NQ_852599-MLA70388676790_072023-OO.webp'
]

export function Home() {
  return (
    <>
      <main className='products-section'>
        <Slider pictures={PICTURES} />
        <section className='mini-servicios-container'>
          <MiniServicios />
        </section>
        <section className='ofertas-container'>
          <div className='ofertas-subtitle'>
            <span style={{ fontSize: '24px' }}>Ofertas</span>{' '}
            <span style={{ fontSize: '16px', color: '#3483fa' }}>Ver todas</span>
          </div>
          <div className='products-slide'>
            <ProductSlider ListOfProducts={ListOfProducts} />
          </div>
        </section>
        <section className='suscribite-section'>
          <Suscribete />
        </section>
        <section className='beneficiosMP-section'>
          <BeneficiosMercadoPuntos />
        </section>
      </main>
    </>
  )
}
