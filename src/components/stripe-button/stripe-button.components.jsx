import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    // price in cents
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JIusvF2erEmmgUBGHRpeMyBPMJ2EayrI1YpKKK9TDcrrpq0MSG2XXol4omUQj0hUqwnbab874AKMS6FFaVNldBj00iG8Kyp9e'
    
    const onToken = token => {
        console.log(token)
        alert('Payment Success!')
    };

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;