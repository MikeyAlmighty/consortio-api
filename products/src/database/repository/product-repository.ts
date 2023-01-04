import { ProductModel, IProduct } from "../models";

class ProductRepository {
    async createProduct({ name, description, brandId }: IProduct){
        try {
          const product = new ProductModel({
            name,
            description,
            brandId
          })

          const productResult = await product.save();
          return productResult;
        } catch (error) {
            console.error(error)
            // throw new Error('API Error', STATUS_CODES)
        }
    }

    async patchProduct({ id: productId, name, description }: IProduct){
        try {
          await ProductModel.findByIdAndUpdate(productId, {
              name,
              description
          })
        } catch (error) {
            console.error(error)
            // throw new Error('API Error', STATUS_CODES)
        }
    }

     async getProducts(){
         try {
           const products = await ProductModel.find();
           return products
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async findById(productId: string){
         try {
           const product = await ProductModel.findById(productId);
           // TODO: Hit brandService with brandId from product
           return product
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async findProductsByBrand(brandId: string){
         try {
            const brands = await ProductModel.find({ brandId });
            return brands;
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async deleteProduct(productId: string) {
       try {
         await ProductModel.findByIdAndDelete({ _id: productId })
       } catch (error) {
         console.error(error)
       }
    }
  }

export default ProductRepository;
