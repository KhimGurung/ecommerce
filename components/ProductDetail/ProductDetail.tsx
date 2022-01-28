import React, { useState } from 'react'
import Selector from '@components/Selector'
import { FiPlus, FiMinus } from "react-icons/fi"
import SectionTitle from '@components/SectionTitle'
import RatingStar from '@components/RatingStar'
import RatingBar from '@components/RatingBar'
import CustomerReview from '@components/CustomerReview'

const ratingStatus = [
    {
        star: "5",
        value: "60%"
    },
    {
        star: "4",
        value: "20%"
    },
    {
        star: "3",
        value: "0%"
    },
    {
        star: "2",
        value: "20%"
    },
    {
        star: "1",
        value: "0%"
    }
]

type product = {
    name: string,
    brand: string,
    price: string,
    shippingCost: string,
    size: string[],
    color: string[],
}

interface IProductDetail {
    className?:string,
    product: product
}

const ProductDetail = ({ className, product }: IProductDetail) => {
    const [size, setSize] = useState("Choose Size")
    const [color, setColor] = useState(product.color[0])
    const [quantity, setQuantity] = useState(1)
    
    const selectSize = (index: number) => {
        setSize(preVal => product.size[index])
    }
    const selectColor = (index: number) => {
        setColor(preVal => product.color[index])
    }

    const increaseQuantity = () => {
        setQuantity(preVal => ++preVal)
    }
    const decreaseQuantity = () => {
        setQuantity(preVal => preVal === 1 ? preVal : --preVal)
    }

    return (
        <section role="product-detail" className="flex-1">
            <h2 className="text-xl">{ product.brand.toUpperCase() }</h2>
            <h1 className="text-4xl font-medium">{ product.name }</h1>
            <p>€{ product.price } incl. VAT</p>
            <div className="my-10">
                <div className="flex justify-between mb-2">
                    <p>Size</p>
                    <p>Size Chart</p>
                </div>
                <Selector   role="product-size" 
                            options={ product.size } 
                            option={ size } 
                            setOption={ selectSize }
                            className="bg-slate-200 p-2 px-4 w-full"
                            wrapperClass="w-full !max-w-none" />
            </div>
            <div>
                <p className="mb-2">Color: { color }</p>
                <div className="flex gap-5">
                    {
                        product.color.map((color, index) => <div key={ color } className={`w-[4rem] h-8 hover:cursor-pointer ${color}`} onClick={ () => selectColor(index) } />)
                    }
                </div>
            </div>
            <div className="flex gap-5 mt-10 h-10">
                <div className="flex w-[10rem] bg-slate-200 grid grid-cols-3">
                    <button className="grid place-content-center" onClick={ decreaseQuantity }>
                        <FiMinus />
                    </button>
                    <div className="grid place-content-center">{quantity}</div>
                    <button className="grid place-content-center" onClick={ increaseQuantity }>
                        <FiPlus />
                    </button>
                </div>
                <button className="bg-slate-600 flex-1 grid place-content-center">
                    <p className="text-white">Add to bag</p>
                </button>
            </div>
            <button className="bg-slate-200 w-full h-10 mt-5">
                <p>In the wishlist</p>
            </button>
            <section className="mt-10">
                <SectionTitle title="Item Description" />
                <p className="mb-4">Article no. 45673827</p>
                <ul className="list-disc ml-5">
                    <li>Uncomplicated training shoe from Nike in a dad sneaker look</li>
                    <li>Durable synthetic and leather upper</li>
                    <li>Cushioning Air technology for high wearing comfort</li>
                    <li>Chunky sneakers with softly padded entry</li>
                    <li>With a small pull tab on the heel</li>
                </ul>
                <p>What pleases stylish sports enthusiasts even more than uncomplicated handling? The training shoes &raquo;Air Monarch IV&laquo; from Nike! Over hill and dale or on smooth ground? No problem with the sports shoes including shock-absorbing Air technology, profiled rubber outsole, softly padded entry and short pull tab on the heel. The basic equipment of the men&rsquo;s shoes also includes the overall hard-wearing synthetic quality.</p>
                <p className="underline mt-5 hover:cursor-pointer hover:text-slate-400">Read more</p>
            </section>
            <section className="mt-10">
                <SectionTitle title="Customer Reviews" className="mb-5" />
                <RatingStar rating={3.5} />
                <p className="text-sm">70% of all reviewers would recommend this item to others</p>
                <RatingBar ratingStatus ={ ratingStatus } className="mt-5" />
                <button className="bg-slate-600 w-4/5 grid place-content-center h-10 mt-8">
                    <p className="text-white">Write your review</p>
                </button>
                <section className="mt-20">
                    {
                        [...Array(3)].map((e, index) => <span key={index}><CustomerReview className="mt-12" /></span>)
                    }
                </section>
            </section>
        </section>
    )
}

export default ProductDetail
