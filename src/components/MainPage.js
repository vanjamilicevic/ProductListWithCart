import styles from '../styles/mainPage.module.scss'
import Deserts from './Deserts'
import Cart from './Cart'
import Modal from './Modal'
import { useState } from 'react'

const MainPage = () => {
    const [cartItems, setCartItems] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const [showModal, setShowModal] = useState(0)
    let n = 0
    return (
        <div className={styles['main-page-and-modal-wrapper']}>
        <div className={styles['main-page-wrapper']}>
            <Deserts
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                cartItems={cartItems}
                setCartItems={setCartItems}
                setQuantity={setQuantity}
                quantity={quantity}
            />
            <Cart
                cartItems={cartItems}
                setCartItems={setCartItems}
                quantity={quantity}
                setQuantity={setQuantity}
                totalPrice={totalPrice}
                setTotalPrice={setTotalPrice}
                showModal={showModal}
                setShowModal={setShowModal}
            />
        {showModal ?
            <Modal
            cartItems={cartItems}
            setCartItems={setCartItems}
            totalPrice={totalPrice}
            setTotalPrice={setTotalPrice}
            setQuantity={setQuantity}
            setShowModal={setShowModal}
            /> 
            :
            n=[]
        }
        </div>
        </div>
    )
}

export default MainPage