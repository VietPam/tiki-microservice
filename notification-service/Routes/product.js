import express from 'express'

import { createProduct, getAllProduct } from '../Controllers/productController.js'

const router = express.Router()

// create Product
router.post('/', createProduct)

// get all product
router.get('/', getAllProduct)

export default router;