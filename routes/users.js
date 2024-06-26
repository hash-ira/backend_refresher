const express = require("express");
const router = express.Router();

router.get('/registration', (req, res) => {
    res.send("<h1> User Registration </h1>")
});

router.get('/account', (req, res) => {
    res.send("<h1> User acoount </h1>")
});

module.exports = router