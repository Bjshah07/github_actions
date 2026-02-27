import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.json({ "message": "Hello World for Github Action using CI/CD pipeline" })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

// npx gitignore node ---> to create .gitignore file for node projects