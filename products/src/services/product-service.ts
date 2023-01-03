import { IProduct } from '../database/models';
import ProductRepository from '../database/repository/product-repository'

type EventsPayload = {
  event: string
  data: {
    product: IProduct
  }
}

class ProductService {
    repository: ProductRepository
    constructor(){
        this.repository = new ProductRepository();
    }

    async createProduct(newProduct: IProduct){
        const product = await this.repository.createProduct(newProduct)
        return product
    }

    async patchProduct(updatedProduct: IProduct) {
        const product = await this.repository.patchProduct(updatedProduct)
        return product
    }

    async getById(id: string) {
      const product = await this.repository.findById(id)
      return product
    }

    async getProducts() {
      const products = await this.repository.getProducts()
      return products
    }

    async deleteProduct(id: IProduct['id']){
      id ? await this.repository.deleteProduct(id) :  null
    }

    async subscribeEvents(payload: EventsPayload) {
        console.log('Triggering.... Product Events')
        const { event, data } =  payload;

        const { product } = data;

        switch(event){
            case 'CREATE_PRODUCT':
                this.createProduct(product)
                break;
            case 'PATCH_BRAND':
                this.patchProduct(product)
                break;
            case 'DELETE_BRAND':
                product.id && this.deleteProduct(product.id)
                break;
            case 'TEST_PRODUCT':
                console.log('Product Event HIT!')
                break;
            default:
                break;
        }
    }
}

export default ProductService
