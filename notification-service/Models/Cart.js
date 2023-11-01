import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
     productID: {
          type: mongoose.Types.ObjectId,
          ref: "Product"
     },
     shopID: {
          type: mongoose.Types.ObjectId,
          ref: "Shop"
     },
     userID: {
          type: mongoose.Types.ObjectId,
          ref: "User"
     },
     priceCart: {
          type: Number,
          required: true
     },
     quantityProduct: {
          type: Number,
          required: true
     }
})


export default mongoose.model("Cart", cartSchema);