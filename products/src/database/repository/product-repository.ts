import { ProductModel, IProduct } from "../models";

class ProductRepository {
    async createProduct({ name, description }: IProduct){
        try {
          const product = new ProductModel({
            name,
            description
          })

          const productResult = await product.save();
          return productResult;
        } catch (error) {
            console.error(error)
            // throw new Error('API Error', STATUS_CODES)
        }
    }

     async getProducts(){
         try {
           const products = await ProductModel.find();
           console.log('[Repository]: returning products: ', products)
           return products
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async findById(id: string){
         try {
           const product =  await ProductModel.findById(id);
           console.log('[Repository]: returning product with Id: ', product)
           return product
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    // async findBySOMETHING(x: string){
    //      try {
    //         const products = await ProductModel.find({ SOMETHING: x });
    //         return products;
    //      } catch (error) {
    //        console.error(error)
    //        // throw new Error('API Error', STATUS_CODES)
    //      }
    // }
  }

export default ProductRepository;
