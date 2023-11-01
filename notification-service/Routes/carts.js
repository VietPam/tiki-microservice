import express from 'express'

import { createCart } from '../Controllers/cartController.js'
const router = express.Router()

// create Product
router.post('/user/:id', createCart)

export default router;