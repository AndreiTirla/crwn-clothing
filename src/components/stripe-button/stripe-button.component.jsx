import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JWziVJlgdVzPvIuAhQ4ejVm0kJYLUlC1JNJ0YxwlWX8OmeQ8rhvb4tN9aVtFMBkR3xf6q3E1BAlxwaQu7pi9GEt00mZeRZeKz'
    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='DRW eShop Ltd.'
            billindAddress
            shippingAddressimage='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton