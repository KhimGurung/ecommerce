import PageTemplate from '@components/PageTemplate'
import ProductDetail from '@components/ProductDetail'
import ProductImage from '@components/ProductImage'
import React from 'react'

const product = {
    name: "Product Name",
    brand: "New Balance",
    price: "39.00",
    shippingCost: "00.00",
    size: ["S","M","L","XL","XLL", "XLLL"],
    color: ["bg-red-500", "bg-black", "bg-green-500", "bg-blue-600"],
    images: [
        "https://picsum.photos/360/430",
        "https://picsum.photos/360/430",
        "https://picsum.photos/360/430",
        "https://picsum.photos/360/430",
        "https://picsum.photos/360/430",
        "https://picsum.photos/360/430",
        "https://picsum.photos/360/430"
    ]
}

const productDetail = () => {
    return (
        <PageTemplate>
            <section className="mt-10 mb-20 max-w-[1380px] container !px-0">
                <div className="flex flex-col lg:flex-row gap-20">
                    <ProductImage images={ product.images } />
                    <ProductDetail product={ product } />
                </div>
            </section>
        </PageTemplate>
    )
}

export default productDetail
