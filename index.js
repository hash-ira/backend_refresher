const express = require("express")
const app = express();

const userRoutes = require("./routes/users")

app.get('/', (req, res) => {
    res.send("<h1> Home </h1>")
});

app.use('/users', userRoutes);

app.listen(5000, () => {
    console.log("Server is running.")
});