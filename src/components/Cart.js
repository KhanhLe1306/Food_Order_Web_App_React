import classes from "./Cart.module.css";
import { useState, useEffect } from "react";

const Cart = (props) => {
	// const [total, setTotal] = useState(0);

	// const updateTotal = () => {
	// 	props.cart.forEach((list) => {
	// 		setTotal((prevTotal) => {
	// 			return prevTotal + list.price * list.amount;
	// 		});
	// 	});
	// };

	// useEffect(() => {
	// 	updateTotal();
	// }, []);

	return (
        <div className={classes.cart__container}>
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
						<span className={"decrement " + classes.button}>-</span>
						<span className={"increment " + classes.button}>+</span>
					</div>
				</div>
			))}
			<div className={classes.cart__summary}>
				<span className={classes.cart__total_label}>Total Amount</span>
				<span className={classes.cart__total}>0</span>
			</div>
			<div className={classes.cart__bottom}>
				<span className={classes.button}>Close</span>
				<span className={classes.button}>Order</span>
			</div>
		</div>
	);
};

export default Cart;
