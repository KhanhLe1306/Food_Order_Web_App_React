
import classes from './Nav.module.css'


const Nav = ({totalQty}) => {
    return (
        <nav>
            <div className={classes.nav + " container"}>
                <div className={classes.title}>LQK Dishes</div>
                <div className={classes.cart}>
                    <i className={`uil uil-shopping-cart-alt ${classes.cart__icon}`}></i>
                    <span className={classes.cart__title}>Your cart</span>
                    <span className={classes.cart__quantity}>{totalQty}</span>
                </div>
            </div>
        </nav>
    )
}
export default Nav