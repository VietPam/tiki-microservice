import Cart from "../Models/Cart.js"
import User from "../Models/User.js"
import Order from "../Models/Order.js"
import Product from "../Models/Product.js"


export const createOrder = async(req, res, next) => {
     const newOrder = new Order(req.body)
     const id = req.params.id
     try{
          newOrder.userID = id
          const savedOrder = await newOrder.save()
          const cart = savedOrder.cartID.toString()
          console.log(cart)

          const updateCart = await Cart.findById({_id: cart})
          const updateQuantityCart = updateCart.quantityProduct

          const product = await Product.findById({_id: updateCart.productID})
          const updateQuantityProduct = product.quantityProduct

          console.log(updateQuantityCart, updateQuantityProduct)

          const updateProduct = await Product.findByIdAndUpdate(id, {
               quantityProduct: updateQuantityProduct - updateQuantityCart
          }, {new:true})

          req.savedOrder = savedOrder
          next();
          res.status(200).json({
               success: true,
               message: 'Đặt hàng thành công',
               data: savedOrder
          })
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}


export const updateOrder = async (req, res, next) => {
     const id = req.params.id
     try{
          const updateOrder = await Order.findByIdAndUpdate(id, {
               $set: req.body
          }, {new:true})
          req.updateOrder = updateOrder
          next();
          res.status(200).json({
               success: true, 
               message: 'Successfully update',
               data: updateOrder})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Failed to update'})
     }
}

