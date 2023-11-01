import nodemailer from 'nodemailer'
import Mailgen from 'mailgen'

// thông báo có Voucher
export const sendEmailVoucher = async(nameUser, mailUser) => {
     let config = {
          service: 'gmail',
          auth: {
               user: process.env.GMAIL_ACCOUNT_USERNAME,
               pass: process.env.GMAIL_ACCOUNT_PASSWORD
          }
     }
     let transporter = nodemailer.createTransport(config)
     let MailGenerator = new Mailgen({
          theme: "salted",
          product: {
               // logo: , 
               name: "Taka",
               link: 'https://www.youtube.com/'
          }
     })
     let response = {
          body: {
               greeting: 'Xin chào',
               name: nameUser,
               intro: "Trong giỏ hàng của bạn có một vài sản phẩm hiện đang có ưu đãi",
               action: {
                    instructions: 'Tiếp tục với Taka',
                    button: {
                         color: '#33b5e5',
                         text: 'Taka.vn',
                         link: 'https://www.youtube.com/watch?v=wbLGXmRtlYw',
                    }
               }
          }
     }
     let mail = await MailGenerator.generate(response)
     let message = {
          from : process.env.GMAIL_ACCOUNT_USERNAME,
          to: mailUser,
          subject: "Voucher Payment Taka",
          html: mail
     }
     await transporter.sendMail(message)
}

// thông báo chúc mừng đăng ký tài khoản
export const sendEmailAuth = async(nameUser, mailUser) => {
     let config = {
          service: 'gmail',
          auth: {
               user: process.env.GMAIL_ACCOUNT_USERNAME,
               pass: process.env.GMAIL_ACCOUNT_PASSWORD
          }
     }
     let transporter = nodemailer.createTransport(config)

     let MailGenerator = new Mailgen({
          theme: "salted",
          product: {     
               name: "Taka",
               link: 'https://www.youtube.com/'
          }
     })

     
     let response = {
          body: {
               greeting: 'Xin chào',
               name: nameUser,
               intro: "Tài khoản của bạn đã đăng ký thành công",
               action: {
                    instructions: 'Tiếp tục với Taka',
                    button: {
                         color: '#33b5e5',
                         text: 'Taka.vn',
                         link: 'https://www.youtube.com/watch?v=wbLGXmRtlYw',
                    }
               }
          }
     }
     let mail = await MailGenerator.generate(response)
     let message = {
          from : process.env.GMAIL_ACCOUNT_USERNAME,
          to: mailUser,
          subject: "Taka Account",
          html: mail
     }
     await transporter.sendMail(message)
}

// thông báo về đơn hàng đã mua
export const sendEmailOrderSuccess = async(nameUser, mailUser) => {
     let config = {
          service: 'gmail',
          auth: {
               user: process.env.GMAIL_ACCOUNT_USERNAME,
               pass: process.env.GMAIL_ACCOUNT_PASSWORD
          }
     }
     let transporter = nodemailer.createTransport(config)

     let MailGenerator = new Mailgen({
          theme: "salted",
          product: {     
               name: "Taka",
               link: 'https://www.youtube.com/'
          }
     })

     
     let response = {
          body: {
               greeting: 'Xin chào',
               name: nameUser,
               intro: "Đơn hàng của bạn đã đặt thành công",
               action: {
                    instructions: 'Tiếp tục với Taka',
                    button: {
                         color: '#33b5e5',
                         text: 'Taka.vn',
                         link: 'https://www.youtube.com/watch?v=wbLGXmRtlYw',
                    }
               }
          }
     }
     let mail = await MailGenerator.generate(response)
     let message = {
          from : process.env.GMAIL_ACCOUNT_USERNAME,
          to: mailUser,
          subject: "Taka Account",
          html: mail
     }
     await transporter.sendMail(message)
}

// thông báo đơn hàng đang trên đường giao
export const sendEmailOrderStatus = async(nameUser, mailUser) => {
     let config = {
          service: 'gmail',
          auth: {
               user: process.env.GMAIL_ACCOUNT_USERNAME,
               pass: process.env.GMAIL_ACCOUNT_PASSWORD
          }
     }
     let transporter = nodemailer.createTransport(config)

     let MailGenerator = new Mailgen({
          theme: "salted",
          product: {     
               name: "Taka",
               link: 'https://www.youtube.com/'
          }
     })

     
     let response = {
          body: {
               greeting: 'Xin chào',
               name: nameUser,
               intro: "Bạn có đơn hàng đang trên đường giao, chú ý liên lạc với nhân viên giao hàng",
               action: {
                    instructions: 'Tiếp tục với Taka',
                    button: {
                         color: '#33b5e5',
                         text: 'Taka.vn',
                         link: 'https://www.youtube.com/watch?v=wbLGXmRtlYw',
                    }
               }
          }
     }
     let mail = await MailGenerator.generate(response)
     let message = {
          from : process.env.GMAIL_ACCOUNT_USERNAME,
          to: mailUser,
          subject: "Taka Account",
          html: mail
     }
     await transporter.sendMail(message)
}

// thông báo hóa đơn
export const sendEmailPaymentBill = async(nameUser, mailUser) => {

}