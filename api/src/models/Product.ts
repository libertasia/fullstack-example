import mongoose, { Document } from "mongoose";

// type from typescript
export type ProductDocument = Document & {
  title: string;
  price: number;
  image: string;
};

export const ProductSchema = new mongoose.Schema({
  title: {
    // type from database
    type: String,
    required: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
  },
});

export default mongoose.model<ProductDocument>("Product", ProductSchema);
