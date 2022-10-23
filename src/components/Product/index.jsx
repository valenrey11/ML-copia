import { useLocation } from 'wouter'
import { Slider } from '../Slider';
import './index.css'
export function Product({ title, id, thumbnail, price, pictures }) {
    const [location, setLocation] = useLocation();
    const handleDetail = () => {
        const route = `/detail/${id}`
        setLocation(route)
    }
    return <div className="product-card" onClick={handleDetail}>
        <div className='product-item'>
            <div className='product-item-img-container' style={{ margin: '0 auto' }}>
                {pictures === undefined ?
                    <img className='product-item-img' alt="thumbnail" src={thumbnail} />
                    :
                    <div style={{ width: '100%', height: '100%' }}>
                        <Slider pictures={pictures} />
                    </div>
                }
            </div>
            <div className="product-item-info">
                <h4 className='product-item-price'>${price} </h4>
                <h4 className='product-item-title'>{title}</h4>
            </div>
        </div>
    </div >

}