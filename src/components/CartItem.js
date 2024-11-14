import styles from '../styles/cartItem.module.scss'

const CartItem = (props) => {

    const removeItem = () => {
        console.log("item")
        for (let i = 0; i < props.cartItems.length; i ++) {
            if(props.cartItems[i].name === props.name) {
                props.setTotalPrice(props.totalPrice - parseFloat(props.cartItems[i].quantity * parseFloat(props.cartItems[i].price)))
                props.setQuantity(parseFloat(props.quantity) - parseFloat(props.cartItems[i].quantity))
                props.cartItems[i].active = 0
                props.cartItems.splice(i,1)
            }
        }
        props.setCartItems(props.cartItems)
    }

    return <div className={styles['cart-item-wrapper']}>
        <div className={styles['item-name-and-price-wrapper']}>
            <p className={styles['item-name']}>{props.name}</p>
            <div className={styles['item-quantity-and-item-price-wrapper']}>
                <p className={styles['item-quantity']}>{props.itemQ}x</p>
                <p className={styles['item-price']}>@ ${props.itemPrice}</p>
                <p className={styles['total-item-price']}>${props.totalItemPrice}</p>
            </div>
        </div>

        <div onClick={removeItem} className={styles['close-sign-wrapper']}>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg>
        </div>
       
    </div>
}

export default CartItem