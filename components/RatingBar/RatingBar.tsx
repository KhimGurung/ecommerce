import React from 'react'

type rating = {
    star: string,
    value: string
}

interface IRatingBar {
    className?:string,
    ratingStatus: rating[]
}

const RatingBar = ({ ratingStatus, className }: IRatingBar) => {
    return (
        <div className={`flex flex-col gap-2 ${className}`}>
            {
                ratingStatus.map((rating, index) => (
                    <div key={ index } className="flex gap-3 items-center">
                        <p className="text-sm">{`${rating.star} star`}</p>
                        <div className="h-6 w-3/5 bg-slate-200">
                            <div className={`bg-slate-600 h-full`} style={{ width: rating.value }} />
                        </div>
                        <p className="text-sm">{rating.value}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default RatingBar
