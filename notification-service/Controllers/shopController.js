import admin from 'firebase-admin'
import User from '../Models/User.js'
import { asyncWrapper } from '../middleware/async.js'
import Shop from '../Models/Shop.js'

export const createShop = async(req, res) => { 
     const newShop = new Shop(req.body)
     try{
          const savedShop = await newShop.save()

          res.status(200).json({
               success: true,
               message: 'Tạo Shop thành công',
               data: savedShop
          })
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}


