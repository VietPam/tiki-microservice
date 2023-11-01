import express from 'express'

import { createOrder, updateOrder } from '../Controllers/orderController.js';
import { emailOrder, emailOrderStatus } from '../NotificationsController/EmailController.js';
const router = express.Router()


router.post('/user/:id', createOrder, emailOrder)
router.put('/:id', updateOrder, emailOrderStatus)
export default router;