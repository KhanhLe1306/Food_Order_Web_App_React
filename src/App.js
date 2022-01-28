import { useEffect, useState } from "react";

import Nav from "./components/Nav";

import classes from "./App.module.css";
import CenterMessage from "./components/CenterMessage";
import image from "./images/image.jpg";
import Lists from "./components/Lists";
import Cart from "./components/Cart";

// const lists = [
//   {
//     id: 1,
//     title: "Sushi",
//     subtitle: "Finest Fish and Veggies",
//     price: 12.99,
//     amount: 2,
//   },
//   {
//     id: 2,
//     title: "Salmon",
//     subtitle: "Butter rosemarry and seaweed Salmon",
//     price: 19.99,
//     amount: 1,
//   },
//   {
//     id: 3,
//     title: "Steak",
//     subtitle: "Hand picked and cooked prime rib",
//     price: 25.99,
//     amount: 1,
//   },
//   {
//     id: 4,
//     title: "Pasta",
//     subtitle: "Turkey, tomatoes, and green pasta",
//     price: 22.99,
//     amount: 2,
//   },
//   {
//     id: 5,
//     title: "Pho",
//     subtitle: "Beef, rice noddle, and veggies",
//     price: 11.99,
//     amount: 2,
//   },
//   {
//     id: 6,
//     title: "Taco",
//     subtitle: "Asada, Carnitas, Fish combo tacos",
//     price: 16.99,
//     amount: 1,
//   },
//   {
//     id: 7,
//     title: "Avocado Toast",
//     subtitle: "Organic Avocado, whole wheet breads, 3 organic eggs",
//     price: 13.99,
//     amount: 1,
//   },
//   {
//     id: 8,
//     title: "Organic Protein Shake",
//     subtitle: "Grass-fed protein powder, greek yogut, milk, berries, avocado, oakmeal",
//     price: 7.99,
//     amount: 5,
//   },
// ];

// const cart = [
//   // {
//   // 	id: 1,
//   // 	title: "Sushi",
//   // 	price: 12.99,
//   // 	amount: 2,
//   // },
//   // {
//   // 	id: 3,
//   // 	title: "Steak",
//   // 	price: 22.99,
//   // 	amount: 1,
//   // },
// ];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [menu, setMenu] = useState([])

  useEffect(() => {
    fetch("http://localhost:4000/foodMenu")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.menu)
        setMenu(responseJson.menu)
      })
  }, [])

  const addItem = (id, title, price, amount) => {
    const newCart = [...cartItems];
    //it wont work if newCart = cartItems.
    // we need to destructor either here or when call setCartItems

    //Check if this item (id) already exists in the cart ?

    if (newCart.filter((object) => object.id === id).length > 0) {
      //if yes, update
      newCart.filter((object) => object.id === id)[0].amount += amount;
      //console.log(cart.filter((object) => object.id === id)[0].amount);
    } else {
      // if not, add new object
      newCart.push({
        id,
        title,
        price,
        amount: amount,
      });
    }
    //console.log(cart);
    // setCartItems(prevCart => {
    //   return [...cart]
    // });

    //console.log(newCart)

    setCartItems(newCart);
    // console.log(cartItems)
  };

  const decrementClickHandler = (id) => {
    const newCart = [...cartItems];
    const modifiedItem = newCart.find((item) => item.id === id);
    if (modifiedItem.amount > 1) {
      newCart.find((item) => item.id === id).amount -= 1;	//Find and update
      setCartItems(newCart);
    } else {
      newCart.find((item) => item.id === id).amount -= 1;
      const cart = newCart.filter((item) => item.amount !== 0)
      setCartItems(cart);
      //if amount == 0, we remove it from the cart
    }
  };

  const incrementClickHandler = (id) => {
    const newCart = [...cartItems];
    newCart.find((item) => item.id === id).amount += 1;
    setCartItems(newCart);
  };

  const toggleCart = () => {
    setShowCart(!showCart)
  }

  const ordering = () => {
    console.log('Ordering...')
  }

  const backDropClickHandler = () => {
    setShowCart(false)
  }

  return (
    <div className={classes.App}>
      <div className={classes.cover__image}>
        <img src={image} alt=""></img>
      </div>
      <Nav totalQty={cartItems.length} onToggleCart={toggleCart} />
      <CenterMessage />
      <Lists onAddItem={addItem} lists={menu} />
      {showCart && (
        <Cart
          onClose={backDropClickHandler}
          cart={cartItems}
          onToggleCart={toggleCart}
          onOrderClick={ordering}
          incrementClickHandler={incrementClickHandler}
          decrementClickHandler={decrementClickHandler}
        />
      )}
    </div>
  );
}

export default App;
