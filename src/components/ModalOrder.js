import styles from '../styles/modalOrder.module.scss'

const ModalOrder = (props) => {
    return (
        <div className={styles['modal-order-wrapper']}>
            <div className={styles['modal-order-image-title-price-wrapper']}>
                <div className={styles['modal-image-wrapper']}>
                    <img className={styles['modal-image']} src={props.image} alt={props.alt}/>
                </div>
                <div className={styles['modal-item-name-and-price-wrapper']}>
                    <div className={styles['modal-title-wrapper']}>
                        <p className={styles['modal-item-name']}>
                            {props.name}
                        </p>
                    </div>
                    <div className={styles['modal-price-wrapper']}>
                        <p className={styles['modal-quantuty']}>
                            {props.itemQ}x
                        </p>
                        <p className={styles['modal-price']}>
                            @ ${(parseFloat(props.itemPrice)).toFixed(2)}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles['modal-order-item-total-price-wrapper']}>
                <p className={styles['modal-total-item-price']}>
                    ${(parseFloat(props.totalItemPrice)).toFixed(2)}
                </p>
            </div>
        </div>
    )
}

export default ModalOrder