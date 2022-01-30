import { useEffect, useState } from "react";

import axios from "axios";

import Nav from "./components/Nav";

import classes from "./App.module.css";
import CenterMessage from "./components/CenterMessage";
import image from "./images/image.jpg";
import Lists from "./components/Lists";
import Cart from "./components/Cart";
import OrderInfoForm from "./components/OrderInfoFrom";


function App() {
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [menu, setMenu] = useState([])
  const [orderInfo, setOrderInfo] = useState(false)
  const [total, setTotal] = useState(0)

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

  const ordering = (totalAmount) => {
    console.log('Ordering...')
    setTotal(totalAmount)
    setShowCart(false)
    setOrderInfo(true)
  }

  const backDropClickHandler = () => {
    setShowCart(false)
  }

  const closeOrderInfoForm = () => {
    setOrderInfo(false)
  }

  const orderInputFromClicked = (name, phoneNumber, address) => {
    const order = {
      name,
      phoneNumber,
      address,
      order: cartItems.map(element => ({ name: element.title, quantity: element.amount })),
      total: total
    }
    //console.log(order)

    axios
      .post('http://localhost:4000/foodMenu/order', order)
      .then(() => console.log("post order succeeded!"))
      .catch(err => console.log(err))

    setOrderInfo(false)
    console.log("finally order!")
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

      {orderInfo && (
        <OrderInfoForm onClose={closeOrderInfoForm} onOrder={orderInputFromClicked} />
      )}
    </div>
  );
}

export default App;
