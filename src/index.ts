import express from 'express'
import cors from 'cors';

import posts from './routes/posts'

const app = express()

app.use(cors());

app.use(express.json())

const PORT = 3000

app.use('/posts', posts)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})