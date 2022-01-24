import React from 'react'

interface Product {
    image: string,
    brand: string,
    name: string,
    price: string
}

interface ICardProduct {
    product: Product
}

const CardProduct = ({ product }: ICardProduct) => {
    return (
        <article>
            <img className="w-full" src={ product.image } />
            <div className="mb-5 mt-2">
              <p>{product.brand.toUpperCase()}</p>
              <p className="text-gray-400 font-light">{product.name}</p>
              <p>{`€ ${product.price}.00`}</p>
            </div>
        </article>
    )
}

export default CardProduct
