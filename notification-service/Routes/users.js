import express from 'express'
const router = express.Router()

import { createUser } from '../Controllers/userController.js';
import { emailAuth } from '../NotificationsController/EmailController.js';

router.post('/', createUser, emailAuth)

export default router