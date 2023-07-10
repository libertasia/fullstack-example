import mongoose, { Document } from "mongoose";

import { ProductDocument, ProductSchema } from "./Product";

// type from typescript
export type OrderDocument = Document & {
  createdAt: Date;
  productList: ProductDocument[];
  userId: string;
};

// add quantity to product in order document

const OrderSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  // syntax embed
  productList: [ProductSchema],
  // ref to User Document
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export default mongoose.model<OrderDocument>("Order", OrderSchema);
