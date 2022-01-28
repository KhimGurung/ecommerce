import Link from 'next/link'
import React from 'react'

interface Product {
    image: string,
    price: string,
    category: string,
    title: string
}

interface ICardProduct {
    product: Product
}

const CardProduct = ({ product }: ICardProduct) => {
    return (
        <article>
            <figure className="w-full flex items-center">
                <img className="h-full w-full object-cover" src={ product.image } />
            </figure>
            <div className="mb-5 mt-2">
              <p className="font-bold">{product.category.toUpperCase()}</p>
              <Link href="/product-detail">
                <p className="font-light hover:cursor-pointer hover:text-gray-400">{product.title}</p>
              </Link>
              <p>{`€ ${product.price}`}</p>
            </div>
        </article>
    )
}

export default CardProduct