import React from 'react'
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs"

interface IRatingStar {
    className?: string,
    rating: number,
    showLabel?: boolean
}

const RatingStar = ({ rating, className, showLabel=true }: IRatingStar) => {
    return (
        <section role="rating-star" className="flex gap-2">
            <div className="flex gap-2">
                {
                    [...Array(5)].map((e,index) => {
                        if(index+0.5 === rating)
                            return <BsStarHalf key={ index } className="text-xl text-slate-600" />
                        else if(index < rating)
                            return <BsStarFill key={ index } className="text-xl text-slate-600" />    
                        else return <BsStar key={ index } className="text-xl text-slate-600" />
                    })
                }
            </div>
            {
                showLabel &&
                    <p>{`${rating} out of 5`}</p>
            }
        </section>
    )
}

export default RatingStar
