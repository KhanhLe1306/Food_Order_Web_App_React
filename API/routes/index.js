const express = require('express')
const router = express.Router()

const foodMenu = require('../database/foodMenu')

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

module.exports = router