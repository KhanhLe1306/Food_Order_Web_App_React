import List from './List'

import classes from './Lists.module.css'


const Lists = (props) => {
    return (
        <div className={classes.lists + ' container'}>
            {props.lists.map(item => (
                <List key={item.id} onAddItem={props.onAddItem} title={item.title} price={item.price} id={item.id} subtitle={item.subtitle} decrementClickHandler={props.decrementClickHandler}
                    incrementClickHandler={props.incrementClickHandler} />
            ))}
        </div>
    )
}

export default Lists