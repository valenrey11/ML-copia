import { useEffect } from "react";
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
        < div className="slide-container"  >
            <Slide>
                {pictures.map((pic, index) => {
                    return <div className="each-slide-effect" key={index} style={{ width: '400px', height: '250px' }} >
                        <div
                            style={{
                                backgroundImage: `url(${(pic)})`,
                                width: '100%',
                                height: '250px',
                                backgroundSize: 'contain'
                            }}>
                        </div>
                    </div>

                })}
            </Slide>
        </div >
    </ >
}

