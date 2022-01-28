import Image from "next/image"
import React, { useState } from "react"
import ImageSlider from "@components/ImageSlider"
import style from "./ProductImage.module.scss"

interface IProductImage {
    className?: string,
    images: string[]
}

const ProductImage = ({ className, images}: IProductImage) => {
    const [activeImage, setActiveImage] = useState(1)
    const _toggleImageSliderModal = (imageId: number) => {
        setActiveImage(prevState => imageId)
    }
    
    return (
        <section role="product-image">
            <div  className={`hidden lg:grid grid-cols-2 gap-4 self-start lg:sticky lg:top-10 min-w-[30rem] ${style.productimage}`}>
                {
                    images.map((image, index) => <Image key={ index } src={ image } height="430px" width="360px" />)
                }
            </div>
            <div className={`lg:hidden`}>
                <ImageSlider   images={ images }/>
            </div>
        </section>
    )
}

export default ProductImage
