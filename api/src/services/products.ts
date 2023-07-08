import { NotFoundError } from "./../helpers/apiError";
import Product, { ProductDocument } from "../models/Product";

export const createProductService = async (
  product: ProductDocument
): Promise<ProductDocument> => {
  return await product.save();
};

export const getProductList = async (): Promise<ProductDocument[]> => {
  return await Product.find();
};

export const getProductByIdService = async (
  productId: string
): Promise<ProductDocument> => {
  const foundProduct = await Product.findById(productId);
  if (!foundProduct) {
    throw new NotFoundError(`product ${productId} not found`);
  }
  return foundProduct;
};

export const updateProductByIdService = async (
  productId: string,
  newInformation: Partial<ProductDocument>
): Promise<ProductDocument> => {
  const foundProduct = await Product.findByIdAndUpdate(
    productId,
    newInformation,
    { new: true }
  );
  if (!foundProduct) {
    throw new NotFoundError(`product ${productId} not found`);
  }
  return foundProduct;
};

export const deleteProductByIdService = async (
  productId: string
): Promise<ProductDocument> => {
  const foundProduct = await Product.findByIdAndDelete(productId);
  if (!foundProduct) {
    throw new NotFoundError(`product ${productId} not found`);
  }
  return foundProduct;
};
