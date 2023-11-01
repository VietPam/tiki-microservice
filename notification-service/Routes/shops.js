import express from 'express'
import {verifyUser} from '../utils/verifyToken.js'
import { createShop } from '../Controllers/shopController.js'

const router = express.Router()

router.post('/', createShop)


export default router;