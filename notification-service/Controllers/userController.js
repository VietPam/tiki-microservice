import User from "../Models/User.js";
import nodemailer from 'nodemailer'
import Mailgen from 'mailgen';
import { asyncWrapper } from "../middleware/async.js";
import fs from 'readline'
import { error } from "console";
// import { sendEmail } from "./SendEmailController.js";
import { sendEmailAuth } from "../NotificationsController/SendEmailController.js";

// import logo from '../Assets/logo.png'


const readImage = async() => {
     try{
          const logoMail = await fs.readFile('../Assets/logo.png').toString('base64')
          return logoMail
     }catch{error}{
          console.log(error)
     }
}

export const createUser = async(req, res, next) => { 
     const user = new User(req.body)
     try{
          const savedUser = await user.save()
          req.savedUser = savedUser
          // res.status(200).json({
          //      success: true,
          //      message: "Gửi Email tới người dùng thành công",
          //      data: user,
          // })

          next();
          
     } catch(err){
          console.log(err)
          res.status(500).json({
               success: false, 
               message: 'Server có lỗi'})
     }
}