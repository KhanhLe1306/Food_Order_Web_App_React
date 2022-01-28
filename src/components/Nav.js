
import classes from './Nav.module.css'


const Nav = ({ totalQty, onToggleCart }) => {
    
    const toggleCart = (event) => {
        onToggleCart()
    }

    return (
        <nav>
            <div className={classes.nav + " container"}>
                <div className={classes.title}>LQK Restaurant</div>
                <div className={classes.cart} onClick={toggleCart}>
                    <i className={`uil uil-shopping-cart-alt ${classes.cart__icon}`}></i>
                    <span className={classes.cart__title}>Your cart</span>
                    <span className={classes.cart__quantity}>{totalQty}</span>
                </div>
            </div>
        </nav>
    )
}
export default Nav