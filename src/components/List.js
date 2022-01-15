import classes from './List.module.css'

const List = (props) => {

    const { onAddItem, price, title, subtitle, id } = props

    const submitHandler = (event) => {
        event.preventDefault()
        console.log(event)
        //call the addItem function here
    }

    return (
        <form onSubmit={submitHandler} className={classes.list} >
            <div className={classes.list__description}>
                <span className={classes.list__title}>{title}</span>
                <span>{subtitle}</span>
                <span className={classes.list__price}>${price}</span>
            </div>
            <div className={classes.list__right_section}>
                <div>
                    <label className={classes.quantity__amount_label}>Amount</label>
                    <select className={classes.quantity__select} id={id} name={title}>
                        <option value='0'>0</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                    </select>
                </div>
                <button className={classes.submit__button} type='submit'> + Add</button>
            </div>
        </form>
    )
}


export default List