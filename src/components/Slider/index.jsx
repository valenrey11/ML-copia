import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'
import { Spinner } from "../Spinner";
export function Slider({ pictures }) {

    if (pictures === undefined) {
        return <>
            < div className="slide-container"  >
                <Spinner />
            </div >
        </ >
    }
    return <>
        < div className="slide-container" style={{ width: '100%', height: '100%' }} >
            <Slide style={{ height: '100px' }}>
                {pictures.map((pic, index) => {
                    return <div className="each-slide-effect" key={index} style={{ width: '100%', height: '11rem' }} >
                        <div
                            style={{
                                backgroundImage: `url(${(pic)})`,
                                // width: '100%',
                                height: '100%',
                                backgroundSize: 'contain',
                                backgroundRepeat: 'no-repeat'
                            }}>
                        </div>
                    </div>

                })}
            </Slide>
        </div >
    </ >
}

