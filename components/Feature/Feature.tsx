import React from 'react'
import { FaBus } from "react-icons/fa"
import { TiArrowBack } from "react-icons/ti"
import { RiSecurePaymentFill, RiShareForwardFill } from "react-icons/ri"

const Feature = () => {
    return (
        <section role="feature" className="bg-slate-100">
            <div className="container flex flex-wrap py-12 gap-10 md:gap-20">
                <div className="flex gap-5 grow shrink basis-64 ">
                    <FaBus role="wish-list-icon" className="text-slate-400 text-4xl min-w-[2.5rem]" />
                    <div>
                        <h3 className="text-xl">FREE SHIPPING</h3>
                        <p>Free shipping for all order above $50</p>
                    </div>
                </div>
                <div className="flex gap-5 grow shrink basis-64 ">
                    <RiShareForwardFill role="wish-list-icon" className="text-slate-400 text-4xl min-w-[2.5rem]" />
                    <div>
                        <h3 className="text-xl">30 DAYS RETURN</h3>
                        <p>Simply return the product within 30 days</p>
                    </div>
                </div>
                <div className="flex gap-5 grow shrink basis-64 ">
                    <RiSecurePaymentFill role="wish-list-icon" className="text-slate-400 text-4xl min-w-[2.5rem]" />
                    <div>
                        <h3 className="text-xl">100% SECURE PAYMENT</h3>
                        <p>We ensure secure payment through trusted payment methods</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature
