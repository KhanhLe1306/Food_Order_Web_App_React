import classes from "./Cart.module.css";
import { useState, useEffect } from "react";
import Modal from "./UI/Modal";

const Cart = (props) => {
    const [total, setTotal] = useState(0);

    const updateTotal = () => {
        props.cart.forEach((list) => {
            setTotal((prevTotal) => {
                return Math.round((prevTotal + list.price * list.amount) * 100) / 100
            });
        });
    };

    useEffect(() => {
        updateTotal();
    }, []);

    useEffect(() => {
        setTotal(0)
        updateTotal();
    }, [props.cart]);


    const decrementClickHandler = (event) => {
        const id_of_clickedItem = event.target.attributes.id.value
        props.decrementClickHandler(+id_of_clickedItem)
    }

    const incrementClickHandler = (event) => {
        const id_of_clickedItem = event.target.attributes.id.value
        props.incrementClickHandler(+id_of_clickedItem)
    }

    const cartOrderClicked = () => {
        props.onOrderClick(total)
    }


    return (
        <Modal onClose={props.onClose} className={classes.cart__container}>
            {props.cart.map((item) => (
                <div key={item.id} className={classes.cart}>
                    <div className={classes.cart__left}>
                        <span className={classes.cart__title}>{item.title}</span>
                        <div className={classes.price_quantity_container}>
                            <span className={classes.cart__price}>${item.price}</span>
                            <span className={classes.cart__quantity}>x{item.amount}</span>
                        </div>
                    </div>
                    <div className={classes.cart__right}>
                        <span id={item.id} onClick={decrementClickHandler} className={"decrement " + classes.button}>-</span>
                        <span id={item.id} onClick={incrementClickHandler} className={"increment " + classes.button}>+</span>
                    </div>
                </div>
            ))}
            <div className={classes.cart__summary}>
                <span className={classes.cart__total_label}>Total Amount</span>
                <span className={classes.cart__total}>{total}</span>
            </div>
            <div className={classes.cart__bottom}>
                <span className={classes.button} onClick={props.onToggleCart}>Close</span>
                <span className={classes.button} onClick={cartOrderClicked}>Order</span>
            </div>
        </Modal>
    );
};

export default Cart;
