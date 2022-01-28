import { useState } from "react";
import classes from "./List.module.css";

const List = (props) => {
	const [pickAmount, setPickedAmount] = useState(0);

	const { onAddItem, price, title, subtitle, id } = props;

	const submitHandler = (event) => {
		event.preventDefault();
		//call the addItem function here
		if (pickAmount > 0) {   //If user pick any amount other than 0
			//console.log(id, title, pickAmount, price);
			onAddItem(id, title, price, pickAmount);
        }
	};

	const changeHandler = (event) => {
		//console.log(event.target.id)
		//console.log(event.target.lastChild.index)
		setPickedAmount(+event.target.value);
	};

	return (
		<form onSubmit={submitHandler} className={classes.list}>
			<div className={classes.list__description}>
				<span className={classes.list__title}>{title}</span>
				<span>{subtitle}</span>
				<span className={classes.list__price}>${price}</span>
			</div>
			<div className={classes.list__right_section}>
				<div>
					<label className={classes.quantity__amount_label}>Amount</label>
					<select
						className={classes.quantity__select}
						onChange={changeHandler}
						id={id}
						name={title}
					>
						<option value="0">0</option>
						<option value="1">1</option>
						<option value="2">2</option>
						<option value="3">3</option>
						<option value="4">4</option>
					</select>
				</div>
				<button className={classes.submit__button} type="submit">
					{" "}
					+ Add
				</button>
			</div>
		</form>
	);
};

export default List;

//event.target.id
//event.target.lastChild.index
