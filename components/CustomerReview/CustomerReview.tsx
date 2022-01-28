import RatingStar from '@components/RatingStar'
import React, { useState } from 'react'

interface ICustomerReview {
    className?:string,
}

const CustomerReview = ({ className}: ICustomerReview) => {
    const [readMore, setReadMore] = useState(true)
    const toggleReadMore = () => {
        setReadMore(preVal => !preVal)
    }
    return (
        <section className={ className }>
            <div className="flex gap-3 mb-3">
                <RatingStar rating={4.5} showLabel={ false } />
                <p className="text-sm">9 customers finds this helpful</p>
            </div>
            <h3 className="text-xl font-medium">Product review headline</h3>
            <p className={`text-justify overflow-hidden ${readMore ? "h-[4.5rem]" : "h-auto"}`}>
                With the Nike Air Monarch IV everything fits so far, the upper material is of super quality and, above all, easy to clean. There is also a sole that is resistant and well padded thanks to the Nike Air system. The softly padded heel area also has a good support function for the foot and the laces used are of very high quality.
                <br />The only small point of criticism is the glue residue between the sole and the upper material, this could be done a little cleaner, but that’s nagging at a high level, the shoe itself has thrilled my husband again, especially because he was previously unsure whether to buy online does not cause major problems, e.g. if the shoes do not fit or press and have to be sent back.
            </p>
            <button onClick={ toggleReadMore } className="hover:cursor-pointer hover:text-black text-slate-400">{ readMore ? "read more..." : "...read less"}</button>
        </section>
    )
}

export default CustomerReview
