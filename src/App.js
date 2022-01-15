import Nav from "./components/Nav";

import classes from './App.module.css'
import CenterMessage from "./components/CenterMessage";
import image from './images/image.jpg'
import Lists from './components/Lists'
import Cart from './components/Cart'

const lists = [
  {
    id: 1,
    title: 'Sushi',
    subtitle: 'Finest Fish and Veggies',
    price: 12.99,
    amount: 2
  },
  {
    id: 2,
    title: 'Salmon',
    subtitle: 'Butter rosemarry and seaweed Salmon',
    price: 19.99,
    amount: 1
  },
  {
    id: 3,
    title: 'Steak',
    subtitle: 'Hand picked and cooked prime rib',
    price: 25.99,
    amount: 1
  },
  {
    id: 4,
    title: 'Pasta',
    subtitle: 'Turkey, tomatoes, and green pasta',
    price: 22.99,
    amount: 2
  }
]

const cart = [
  {
    id: 1,
    title: 'Sushi',
    price: 12.99,
    amount: 2
  },
  {
    id: 3,
    title: 'Steak',
    price: 22.99,
    amount: 1
  }
]

function App() {

  const addItem = () => {

  }

  return (
    <div className={classes.App}>
      <div className={classes.cover__image}>
        <img src={image}></img>
      </div>
      <Nav />
      <CenterMessage />
      <Lists onAddItem={addItem} lists={lists} />
      <Cart cart={cart} />
    </div>
  );
}

export default App;
