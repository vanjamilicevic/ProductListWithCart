import ItemCard from './ItemCard'
import styles from '../styles/deserts.module.scss'

let dessertList = [
    {
        name: 'Waffle',
        description: 'Waffle with Berries',
        price: '6.5',
        image: './assets/productImages/image-waffle-desktop.jpg',
        active: 0
    },
    
    {
        name: 'Creme Brulee',
        description: 'Vanilla Bean Creme Brulee',
        price: '7.00',
        image: './assets/productImages/image-creme-brulee-desktop.jpg',
        active: 0
    },

    {
        name: 'Macaron',
        description: 'Macaron Mix of Five',
        price: '8.00',
        image: './assets/productImages/image-macaron-desktop.jpg',
        active: 0
    },

    {
        name: 'Tiramisu',
        description: 'Classic Tiramisu',
        price: '5.50',
        image: './assets/productImages/image-tiramisu-desktop.jpg',
        active: 0
    },

    {
        name: 'Baklava',
        description: 'Pistacio Baklava',
        price: '4.00',
        image: './assets/productImages/image-baklava-desktop.jpg',
        active: 0
    },

    {
        name: 'Pie',
        description: 'Lemon Meringue Pie',
        price: '5.00',
        image: './assets/productImages/image-meringue-desktop.jpg',
        active: 0
    },

    {
        name: 'Cake',
        description: 'Red Velvet Cake',
        price: '4.50',
        image: './assets/productImages/image-cake-desktop.jpg',
        active: 0
    },

    {
        name: 'Brownie',
        description: 'Salted Caramel Brownie',
        price: '5.50',
        image: './assets/productImages/image-brownie-desktop.jpg',
        active: 0
    },

    {
        name: 'Panna Cotta',
        description: 'Vanilla Panna Cotta',
        price: '6.50',
        image: './assets/productImages/image-panna-cotta-desktop.jpg',
        active: 0
    }
]

const Deserts = (props) => {
    return (
        <div className={styles['desserts-wrapper']}>
            <h1 className={styles['deserts-title']}>
                    Desserts
                </h1>
            <div className={styles['desserts-container']}>
                
                {
                    dessertList.map((item, key) => (
                        <ItemCard
                            itemClicked={props.itemClicked}
                            setItemClicked={props.setItemClicked}
                            totalPrice={props.totalPrice}
                            setTotalPrice={props.setTotalPrice}
                            cartItems={props.cartItems}
                            setCartItems={props.setCartItems}
                            setQuantity={props.setQuantity}
                            quantity={props.quantity}
                            key={key}
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            link={item.image}
                            active={item.active}
                        />
                    )
                )}
            </div>
        </div>
    ) 
}

export default Deserts