import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
     userID: {
          type: mongoose.Types.ObjectId,
          ref: "User"
     },
     voucherID: {
          type: mongoose.Types.ObjectId,
          ref: "Voucher"
     },
     productID: {
          type: mongoose.Types.ObjectId,
          ref: "Product"
     },
     descNoti: {
          type: String,
          required: true
     },
})


export default mongoose.model("Notification", notificationSchema);