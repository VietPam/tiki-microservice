import mongoose from "mongoose";

const voucherSchema = new mongoose.Schema(
  {
     voucherName: {
          type: String,
          required: true,
     },
     
     productApply: [
          {
               type:mongoose.Types.ObjectId,
               ref: "Product"
          }
     ],
     
     shopApply: [
          {
               type:mongoose.Types.ObjectId,
               ref: "Shop"
          }
     ]
  },
);

export default mongoose.model("Voucher", voucherSchema);
