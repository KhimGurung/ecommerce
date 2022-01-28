import SectionTitle from '@components/SectionTitle'
import React from 'react'
import style from "./Payment.module.scss"

interface IPayment {
    className?: string
}

const Payment = ({ className } : IPayment) => {
    return (
        <section role="payment-option" className={ style.payment }>
            <SectionTitle title="Our payment methods" />
            <ul>
                <li>Paypal</li>
                <li>Credit Card</li>
                <li>Debit Card</li>
                <li>Payment by invoice</li>
            </ul>
        </section>
    )
}

export default Payment
