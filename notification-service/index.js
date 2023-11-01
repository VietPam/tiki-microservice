import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './Database/Connect.js'
import path from 'path'
import bodyParser from 'body-parser'
import webpush from 'web-push'

import productRoute from './Routes/product.js'
import userRoute from './Routes/users.js'
import voucherRoute from './Routes/voucher.js'
import cartRoute from './Routes/carts.js'
import shopRoute from './Routes/shops.js'
import notificationRoute from './Routes/notifications.js'
import orderRoute from './Routes/orders.js'


const app = express()
dotenv.config()

const port = process.env.PORT || 8000
const corsOptions = {
     origin: true,
     credentials: true
}

app.use(express.static('./public'));
app.use(express.json())
app.use(cors(corsOptions))

app.use('/products', productRoute)
app.use('/auth', userRoute)
app.use('/voucher', voucherRoute)
app.use('/cart', cartRoute)
app.use('/shop', shopRoute)
app.use('/notification', notificationRoute)
app.use('/order', orderRoute)




const start = async() => {
  try{
       await connectDB(process.env.MONGO_URI)
       app.listen(port, () => {
            console.log(`Server is listening on port ${port} .....`)
       })
  }catch(err){
       console.log(err)
  }
}
  
start()