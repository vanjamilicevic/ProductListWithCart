import styles from '../styles/itemCard.module.scss'

const ItemCard = (props) => {

    const itemInCart = props.cartItems.find(item => item.name === props.name)
    const itemClicked = itemInCart ? itemInCart.quantity : 0
    const addItemToCart = () => {
        const existingItemIndex = props.cartItems.findIndex(item => item.name === props.name)
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...props.cartItems]
            updatedCartItems[existingItemIndex].quantity += 1
            props.setCartItems(updatedCartItems)
        } else {
            props.setCartItems([
                ...props.cartItems,
                {
                    name: props.name,
                    description: props.description,
                    price: props.price,
                    quantity: 1,
                    active: 1,
                    image: props.link,
                },
            ])
        }

        props.setQuantity(props.quantity + 1)
        props.setTotalPrice(props.totalPrice + parseFloat(props.price))
    }

    const removeItemFromCart = () => {

        const existingItemIndex = props.cartItems.findIndex(item => item.name === props.name)
        if (existingItemIndex !== -1) {
            const updatedCartItems = [...props.cartItems]
            if (updatedCartItems[existingItemIndex.quantity === 1]) {
                updatedCartItems.splice(existingItemIndex, 1)
            } else {
                updatedCartItems[existingItemIndex].quantity -= 1
            }
            props.setCartItems(updatedCartItems)
            props.setQuantity(props.quantity - 1)
            props.setTotalPrice(props.totalPrice - parseFloat(props.price))
        }
    }

    return (
        itemClicked ?
        <div className={styles['card-container']}>
            <div className={styles['img-wrapper-clicked']}>
                <img className={styles['card-image']} src={props.link} alt={props.alt}/>
            </div>
                <div className={styles['add-to-cart-wrapper-clicked']}>
                    <div onClick={removeItemFromCart} className={styles['minus-wrapper']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2">
                            <path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/>
                        </svg>
                    </div>
                    <p className={styles['item-count']}>{itemClicked}</p>
                    <div onClick={addItemToCart} className={styles['plus-wrapper']}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
                            <path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
                        </svg>
                    </div>
                </div>          
            <div className={styles['name-and-price-wrapper']}>
                <p className={styles['product-name']}>{props.name}</p>
                <p className={styles['product-description']}>{props.description}</p>
                <p className={styles['price']}>${props.price}</p>
            </div>
        </div>  
        :
        <div className={styles['card-container']}>
            <div className={styles['img-wrapper']}>
                <img className={styles['card-image']} src={props.link} alt={props.alt}/>
            </div>
                <div onClick={addItemToCart} className={styles['add-to-cart-wrapper']}>
                    <svg className={styles['cart-icon']} xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clipPath="url(#a)">
                        <path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs>
                    </svg>
                    <p className={styles['add-to-cart']}>Add to cart</p>
                </div>          
            <div className={styles['name-and-price-wrapper']}>
                <p className={styles['product-name']}>{props.name}</p>
                <p className={styles['product-description']}>{props.description}</p>
                <p className={styles['price']}>${props.price}</p>
            </div>
        </div> 
    )
}

export default ItemCard