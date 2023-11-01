import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
     shopID: {
          type: mongoose.Types.ObjectId,
          ref: "Product"
     },
     shopName: {
          type: String,
          required: true,
     },
     shopLocation: {
          type: String,
          required: true,
     },
})


export default mongoose.model("Shop", shopSchema);