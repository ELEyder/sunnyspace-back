import express from 'express'
import { getPosts , createPost, deletePost } from '../services/posts' 

const router = express.Router()

router.get('/', async (_, res) => {
    const response = await getPosts()
    res.json(response)
})

router.post('/create', async (req , res) => {
    const response = await createPost(req.body)
    res.json(response)
})

router.delete('/delete/:id', async (req , res) => {
    const { id } = req.params;
    const response = await deletePost(id)
    res.json(response)
})

export default router