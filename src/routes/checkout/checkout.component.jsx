import { useContext } from 'react';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { CartContext } from '../../contexts/cart.context';

import { HeaderBlock, CheckoutContainer, CheckoutHeader, Total } from './checkout.styles.jsx';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {
                cartItems.map((cartItem) => {
                        const { id, imageUrl, name, quantity, price } = cartItem;
                        return (
                            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                        )
                    }
                )
            }
            <Total>TOTAL: ${cartTotal}</Total>
        </CheckoutContainer>
    );
}

export default Checkout;