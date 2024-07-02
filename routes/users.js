const express = require("express");
const router = express.Router();

router.get('/registration', (req, res) => {
    res.send("<h1> User Registration </h1>")
});

router.get('/account', (req, res) => {
    res.send("<h1> User acoount </h1>")
});

// advanced routing concepts

// variable used in routes as well as accessed
// chaining of differe CRUD operations on single method
router.route('/:id')
    .get((req, res) => {
        console.log(req.params.id);
        res.send("You hit the correct route");
    })
    .post((req, res) => {
        console.log("post request");
    })


module.exports = router