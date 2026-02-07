import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.json("Hello World for Github Action CI/CD")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})