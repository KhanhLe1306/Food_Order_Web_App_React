const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const foodMenuRoute = require('./routes/index')

const app = express()

const PORT = 4000


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/foodMenu', foodMenuRoute)



app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`)
})





