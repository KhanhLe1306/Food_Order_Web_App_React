const express = require('express')
const router = express.Router()

const foodMenu = require('../database/foodMenu')

const collection = require('../controllers/mongoConnect')

router.get('/', (req, res) => {
    try {
        res.status(200).json({
            menu: foodMenu
        })
    } catch (err) {
        res.status(404).json({
            message: "some errors occured",
            err
        })
    }
})

router.get('/order', async (req, res) => {
    res.send(await collection.find({}).toArray())
})

router.post('/order', async (req, res) => {
    console.log(req.body)
    collection.insertOne(req.body)
})

module.exports = router