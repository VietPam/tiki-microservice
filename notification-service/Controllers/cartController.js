import admin from 'firebase-admin'
import User from '../Models/User.js'
import { asyncWrapper } from '../middleware/async.js'
import Product from '../Models/Product.js'
import Cart from '../Models/Cart.js'

export const createCart = async(req, res) => {
     const newCart = new Cart(req.body)
     const id = req.params.id
     try{

          newCart.userID = id;
          const savedCart = await newCart.save()

          res.status(200).json({
               success: true,
               message: 'Thêm sản phẩm vào giỏ hàng thành công',
               data: savedCart
          })
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}













