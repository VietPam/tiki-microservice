import express from 'express'
import { emailVoucher } from "../NotificationsController/EmailController.js";

const router = express.Router()

router.post('/:id', emailVoucher)

export default router