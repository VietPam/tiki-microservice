import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
     orderID: {
          type: mongoose.Types.ObjectId,
          ref: "Order"
     },
     payment: {
          type: Number,
          required: true
     }
})


export default mongoose.model("Payment", paymentSchema);