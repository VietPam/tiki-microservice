import Cart from "../Models/Cart.js";
import Product from "../Models/Product.js";
import User from "../Models/User.js";
import Notification from "../Models/Notification.js";
import Voucher from "../Models/Voucher.js";

import { sendEmailVoucher, sendEmailAuth, sendEmailOrderSuccess, sendEmailOrderStatus, sendEmailPaymentBill } from "./SendEmailController.js";

import Mailgen from "mailgen";
import nodemailer from 'nodemailer'
import { asyncWrapper } from "../middleware/async.js";


// tạo Voucher
export const emailVoucher = async(req, res) => {
     const savedVoucher = req.savedVoucher
     try{
          // for(let i = 0; i < savedVoucher.productApply.length; i++){
          //      const product = await Product.findById({_id: savedVoucher.productApply[i]})
          //      const cart = await Cart.findOne({productID: savedVoucher.productApply[i]})
               
          //      if(!product){
          //           return res.status(404).json({message: "Sản phẩm áp dụng Voucher không tồn tại"})
          //      }else if(cart){
          //           const user = await User.findById({_id: cart.userID}) 
          //           console.log("Hiện tại giỏ hàng của " + user.username + " có thể sử dụng mã giảm gias")
          //           // sendEmailVoucher(user.username, user.email)
          //           // const newNotification = new Notification({userID: user._id, voucherID: savedVoucher._id, productID: product._id
          //           //      , descNoti:"Sản phẩm " + product.productName + " trong giỏ hàng của bạn đang có mã giảm giá " +  savedVoucher.voucherName})
          //           //      const savedNoti = await newNotification.save()
          //      }
          // }
          // for(let i = 0; i < mailUser.length; i++){
          //      sendEmailVoucher(mailUser[i].username, mailUser[i].email)
          // }

          for(let i = 0; i < savedVoucher.productApply.length; i++){
               const product = await Product.findById({_id: savedVoucher.productApply[i]})
               if(product){
                    const carts = await Cart.find({productID: savedVoucher.productApply[i]})
                    for(const cart of carts){
                         const user = await User.findById({_id: cart.userID})
                         if(user){
                              sendEmailVoucher(user.username, user.email)
                         }
                    }
               }
          }
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}

// đăng ký tài khoản
export const emailAuth = async(req, res) => {
     const savedUser = req.savedUser
     try{
          // console.log(typeof(user))
          sendEmailAuth(savedUser.username, savedUser.email)

          res.status(200).json({
               success: true,   
               message: 'Tạo tài khoản thành công, đã gửi thông báo đến người dùng',
               data: savedUser
          }) 
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}

// order thành công
export const emailOrder = async(req, res) => {
     const savedOrder = req.savedOrder
     try{
          const user = await User.findById({_id: savedOrder.userID.toString()})
          
          console.log(user.username, user.email)
          sendEmailOrderSuccess(user.username, user.email)

     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}


// cập nhật trạng thái đơn hàng (đang trên đường giao)
export const emailOrderStatus = async(req, res) => {
     const updateOrder = req.updateOrder
     try{
          if(updateOrder.orderStatus.toString() === "run"){
               const cart = await Cart.findById({_id: updateOrder.cartID.toString()})
               const user = await User.findById({_id: cart.userID.toString()})

               sendEmailOrderStatus(user.username, user.email)
          }
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}


// hóa đơn thanh toán
export const emailPaymentBill = async(req, res) => {

}
