import mongoose, { Document } from "mongoose";

export type UserDocument = Document & {
  email: string;
  password: string;
  firstName: string;
};

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
  },
});

export default mongoose.model<UserDocument>("User", UserSchema);
