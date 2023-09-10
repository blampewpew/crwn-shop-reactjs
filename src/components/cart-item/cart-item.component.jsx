import { CartItemsContainer, ItemDetails } from './cart-item.styles.jsx';

const CartItem = ({cartItem}) => {
    const { name, imageUrl, price, quantity } = cartItem;
    return (
        <CartItemsContainer>
            <img src={imageUrl} alt={`${name}`} />
            <ItemDetails>
                <span>{name}</span>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
            
        </CartItemsContainer>
    );
}

export default CartItem;