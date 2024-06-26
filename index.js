const express = require("express")
const app = express();

app.get('/', (req, res) => {
    console.log("home route accessed.")
    // res.download("./index.js")
    res.status(500).json({ message: "Hello" })


});

app.listen(5000, () => {
    console.log("Server is running.")
});