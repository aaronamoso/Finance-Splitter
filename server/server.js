// This is where we connect the REST or take the form validation

const express = require("express")
const app = express()

const PORT = 3000

//route URL
app.get("/", (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, () => {
    console.log(`Running at HTTP://localhost:${PORT}`)
})