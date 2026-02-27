import express from 'express';

const app = express()

app.get('/', (req, res) => {
    res.json({ message: "Learning GitHub Actions CI/CD pipeline" })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})

// npx gitignore node ---> to create .gitignore file for node projects