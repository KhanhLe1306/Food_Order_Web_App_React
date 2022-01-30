const order = [
    { id: 3, title: 'Steak', price: 25.99, amount: 2 },
    { id: 2, title: 'Salmon', price: 19.99, amount: 2 },
    { id: 1, title: 'Sushi', price: 12.99, amount: 1 }
]


console.log(order.map(element => {
    return {
        name: element.title,
        quantity: element.amount
    }
}))

console.log(order.map(element => ({ name: element.title, quantity: element.amount })))