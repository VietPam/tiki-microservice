import Voucher from "../Models/Voucher.js";
import { asyncWrapper } from "../middleware/async.js";
import User from "../Models/User.js";
import Cart from "../Models/Cart.js";
import Product from "../Models/Product.js";
import Notification from "../Models/Notification.js";
import nodemailer from 'nodemailer'
import Mailgen from 'mailgen'

import admin from 'firebase-admin'
import serviceAccount from '../notification-service-c0152-firebase-adminsdk-qqz5b-c34673fb48.json'assert { type: 'json' };
import { getDownloadURL, ref } from "firebase/storage";

import axios from 'axios'


admin.initializeApp({
     credential: admin.credential.cert(serviceAccount),
     databaseURL: "https://notification-service-c0152.firebaseio.com",
     storageBucket: "notification-service-c0152.appspot.com",
})


// export const createVoucher = async(req, res) => {
//      const newVoucher = new Voucher(req.body)
//      const firestore = admin.firestore();
//      const notificationsCollection = firestore.collection("notifications");

//      try{
//           const savedVoucher = await newVoucher.save()
//           for(let i = 0; i < newVoucher.productApply.length; i++){
//                // const productID = newVoucher.productApply[i]
//                const product = await Product.findById({_id: newVoucher.productApply[i]})
//                const cart = await Cart.findOne({productID: newVoucher.productApply[i]})
               
//                if(!product){
//                     return res.status(404).json({message: "Sản phẩm áp dụng Voucher không tồn tại"})
//                }else if(cart){
//                     const user = await User.findById({_id: cart.userID}) 
//                     console.log("Hiện tại giỏ hàng của " + user.username + " có thể sử dụng mã giảm gias")
//                     sendEmailUser(user.username, user.email)
//                     const newNotification = new Notification({userID: user._id, voucherID: savedVoucher._id, productID: product._id
//                          , descNoti:"Sản phẩm " + product.productName + " trong giỏ hàng của bạn đang có mã giảm giá " +  savedVoucher.voucherName})
//                          const savedNoti = await newNotification.save()

//                     save notification in Firestore
//                     const notificationData = {
//                          userID: user._id.toString(),
//                          voucherID: savedVoucher._id.toString(),
//                          productID: product._id.toString(),
//                          descNoti: "Sản phẩm " + product.productName + " trong giỏ hàng của bạn đang có mã giảm giá " + savedVoucher.voucherName,
//                          timestamp: admin.firestore.FieldValue.serverTimestamp()
//                     };
//                     await notificationsCollection.add(notificationData);
//                }
//           }
          
//           res.status(200).json({
//                success: true,   
//                message: 'Tạo Voucher cho các sản phẩm thành công',
//                data: savedVoucher
//           }) 
//      }catch(err){
//           console.log(err)
//           res.status(500).json({
//                success: false, 
//                message: 'Server có lỗi'})
//      }
// }

export const createVoucher = async(req, res, next) => {
     const newVoucher = new Voucher(req.body)
     try{
          for(let i = 0; i < newVoucher.productApply.length; i++){
               const product = await Product.findById({_id: newVoucher.productApply[i]})
               const cart = await Cart.findOne({productID: newVoucher.productApply[i]})
               
               if(!product){
                    return res.status(404).json({message: "Sản phẩm áp dụng Voucher không tồn tại"})
               }
          }
          const savedVoucher = await newVoucher.save()

          // await axios.post(`http://localhost:4000/notification/${savedVoucher._id}`);
          req.savedVoucher = savedVoucher
          next();
          res.status(200).json({
               success: true,
               message: 'Tạo Voucher thành công',
               data: savedVoucher
          })
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}