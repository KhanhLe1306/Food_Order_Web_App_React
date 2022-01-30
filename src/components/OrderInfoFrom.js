import { useRef } from 'react'

import classes from './OrderInfoForm.module.css'
import CloseButton from './UI/CloseButton'
import Modal from './UI/Modal'
import OrderButton from './UI/OrderButton'


const OrderInfoForm = (props) => {

    const nameRef = useRef()
    const phoneNumberRef = useRef()
    const addressRef = useRef()

    const orderButtonClicked = (e) => {
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(phoneNumberRef.current.value)
        console.log(addressRef.current.value)
        props.onOrder(nameRef.current.value, phoneNumberRef.current.value, addressRef.current.value)
    }

    return (
        <Modal>
            <div className={classes.order__form}>
                <div className={classes.order__nav}>
                    <span>LQK Restaurant</span>
                    <span>Order Information</span>
                </div>
                <form>
                    <div>
                        <label>Name</label>
                        <input ref={nameRef} />
                    </div>
                    <div>
                        <label>Phone number</label>
                        <input ref={phoneNumberRef} />
                    </div>
                    <div>
                        <label>Address</label>
                        <input ref={addressRef} />
                    </div>
                    <div className={classes.order__bottom}>
                        <CloseButton onClose={props.onClose} />
                        <OrderButton onClick={orderButtonClicked} />
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default OrderInfoForm