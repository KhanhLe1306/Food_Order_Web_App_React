import { useState } from "react";

import Nav from "./components/Nav";

import classes from "./App.module.css";
import CenterMessage from "./components/CenterMessage";
import image from "./images/image.jpg";
import Lists from "./components/Lists";
import Cart from "./components/Cart";

const lists = [
	{
		id: 1,
		title: "Sushi",
		subtitle: "Finest Fish and Veggies",
		price: 12.99,
		amount: 2,
	},
	{
		id: 2,
		title: "Salmon",
		subtitle: "Butter rosemarry and seaweed Salmon",
		price: 19.99,
		amount: 1,
	},
	{
		id: 3,
		title: "Steak",
		subtitle: "Hand picked and cooked prime rib",
		price: 25.99,
		amount: 1,
	},
	{
		id: 4,
		title: "Pasta",
		subtitle: "Turkey, tomatoes, and green pasta",
		price: 22.99,
		amount: 2,
	},
];

const cart = [
	// {
	// 	id: 1,
	// 	title: "Sushi",
	// 	price: 12.99,
	// 	amount: 2,
	// },
	// {
	// 	id: 3,
	// 	title: "Steak",
	// 	price: 22.99,
	// 	amount: 1,
	// },
];

function App() {
	const [cartItems, setCartItems] = useState([]);

	const addItem = (id, title, price, amount) => {
		//Check if this item (id) already exists in the cart ?

		if (cart.filter((object) => object.id === id).length > 0) {
			//if yes, update
			cart.filter((object) => object.id === id)[0].amount += +amount;
			//console.log(cart.filter((object) => object.id === id)[0].amount);
		} else {
			// if not, add new object
			cart.push({
				id,
				title,
				price,
				amount: +amount,
			});
		}
    console.log(cart);
		setCartItems(cart);
    // console.log(cartItems)
	};

	return (
		<div className={classes.App}>
			<div className={classes.cover__image}>
				<img src={image} alt=""></img>
			</div>
			<Nav />
			<CenterMessage />
			<Lists onAddItem={addItem} lists={lists} />
			<Cart cart={cartItems} />
		</div>
	);
}

export default App;
