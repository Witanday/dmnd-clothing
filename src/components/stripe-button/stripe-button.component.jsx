import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_QvInI6sB8cq9TnM4vNP2t9Ge00ravtvXnI';

   const  onToken = token =>{
        console.log(token)
        alert('Payment Successful')
    }
    return(
        <StripeCheckout   
            label='Pay Now'
            name='DMND Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/KCJ.svg'
            description={`Your total is $${price}`}
            panelLabel='Pay Now'
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        
        />
    )

}


export default StripeCheckoutButton