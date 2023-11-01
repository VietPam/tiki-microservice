import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
     userID: {
          type: mongoose.Types.ObjectId,
          ref: "User"
     },
     cartID: {
          type: mongoose.Types.ObjectId,
          ref: "Cart"
          },
     voucherID: [
          {
               type: mongoose.Types.ObjectId,
               ref: "Voucher"
          }
     ],
     price: {
          type: Number,
          required: true
     },
     recipienAddress: {
          type: String,
          required: true
     },
     paymentMethod: {
          type: String,
          required: true
     },
     paymentStatus:{
          type: String, 
          required: true
     },
     orderStatus:{
          type: String,
          required: true
     }

})


export default mongoose.model("Order", orderSchema);