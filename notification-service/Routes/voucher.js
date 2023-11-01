import express from 'express'
const router = express.Router()

import { createVoucher } from '../Controllers/voucherController.js'
import { emailVoucher } from '../NotificationsController/EmailController.js'

router.post('/', createVoucher, emailVoucher)

export default router