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

    async patchProduct({ id, name, description }: IProduct){
        try {
          await ProductModel.findByIdAndUpdate(id, {
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

    async findById(id: string){
         try {
           const product =  await ProductModel.findById(id);
           return product
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async deleteProduct(id: string) {
       try {
         await ProductModel.findByIdAndDelete({ _id: id })
       } catch (error) {
         console.error(error)
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
