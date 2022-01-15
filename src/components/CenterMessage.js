
import classes from './CenterMessage.module.css'

const CenterMessage = () => {
    return (
        <div className={classes.center__message}>
            <h1 className={classes.message__title}>Delicious Food, Deliver To You</h1>
            <p className={classes.message__description}>Choose your favorite meal from our brand selection of available meals and enjoy a delicious lunch or dinner at home <br></br>All our meals are cooked with high quality-ingredients just-in-time and of course by experienced chefs!</p>

        </div>
    )
}

export default CenterMessage