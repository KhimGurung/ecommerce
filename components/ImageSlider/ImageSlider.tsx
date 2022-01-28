import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, {Zoom} from "swiper"
import 'swiper/css'
import 'swiper/css/bundle'

SwiperCore.use([ Zoom])

interface IImageSlider {
    images: string[],
}

function ImageSliderModal({ images }: IImageSlider) {

    useEffect(() => {
        const nextBtn = document.getElementsByClassName("swiper-button-prev")[0] as HTMLDivElement
        const prevBtn = document.getElementsByClassName("swiper-button-next")[0] as HTMLDivElement
        document.styleSheets[0].insertRule('.swiper-button-prev:after { font-size: 1.4rem !important; }');
        nextBtn.style.color = "#475569"
        nextBtn.style.height = "40px"
        nextBtn.style.width = "40px"
        nextBtn.style.backgroundColor = "rgba(255, 255, 255, 0.6)"
        nextBtn.style.borderRadius = "20px"

        document.styleSheets[0].insertRule('.swiper-button-next:after { font-size: 1.4rem !important; }');
        prevBtn.style.color = "#475569"
        prevBtn.style.height = "40px"
        prevBtn.style.width = "40px"
        prevBtn.style.backgroundColor = "rgba(255, 255, 255, 0.6)"
        prevBtn.style.borderRadius = "20px"
      
    }, [])

    return (
            <Swiper
                    spaceBetween={50}
                    initialSlide={ 1 }
                    loop={ true }
                    navigation
                    style={{  }}
                    slidesPerView={ 1 }
                    zoom
                    className="image-slider" >
                {
                    images.map((slideImage, index) => (
                        <SwiperSlide key={ index } zoom={ true } style={{  width: "100%", height: "auto" }}>
                            <img src={slideImage} style={{  width: "100%" }} onClick={ event => event.stopPropagation() } /> 
                        </SwiperSlide>
                    ))
                } 
            </Swiper>
    )
}

export default ImageSliderModal
