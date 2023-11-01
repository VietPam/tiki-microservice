import admin from 'firebase-admin'
import User from '../Models/User.js'
import { asyncWrapper } from '../middleware/async.js'
import Product from '../Models/Product.js'

export const createProduct = async(req, res) => { 
     const newProduct = new Product(req.body)
     const idUser = req.params.id
     try{
          const savedProduct = await newProduct.save()

          res.status(200).json({
               success: true,
               message: 'Tạo sản phẩm thành công',
               data: savedProduct
          })
     }catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}


export const getAllProduct = async (req, res) => {
     const page = parseInt(req.query.page)

     try{
          const products = await Product.find({})
          
          res.status(200).json({
               success: true, 
               count: products.length,
               message: 'Tất cả sản phẩm',
               data: products})
     }catch(err){
          res.status(404).json({
               success: false, 
               message: 'Server có lỗi'})
     } 
}

export const updateQuantityProduct = async (req, res, next) => {
     const id = req.params.id
     try{
          const updateQuantity = await Product.findByIdAndUpdate(id, {
               $set: req.body
          }, {new:true})
          req.updateQuantity = updateQuantity
          next();
          res.status(200).json({
               success: true, 
               message: 'Cập nhật số lượng sản phẩm thành công',
               data: updateQuantity})
     }catch(err){
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}








