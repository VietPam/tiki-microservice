import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    shopID: {
      type: mongoose.Types.ObjectId,
      ref: "Shop"
    },
    descProduct: {
      type: String,
      required: true
    },
    priceProduct: {
      type: Number,
      required: true
    },
    quantityProduct:{
      type: Number,
      required: true
    }, 
    imageProduct:{
      type: String, 
      required: false
    }
  }
);

export default mongoose.model("Product", productSchema);
