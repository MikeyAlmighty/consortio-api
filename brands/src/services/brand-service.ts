import { IBrand } from '../database/models';
import BrandRepository from '../database/repository/brand-repository'

type EventsPayload = {
  event: string
  data: {
    brand: IBrand
  }
}

class BrandService {
    repository: BrandRepository
    constructor(){
        this.repository = new BrandRepository();
    }

    async createBrand(newBrand: IBrand) {
        const brand = await this.repository.createBrand(newBrand)
        return brand
    }

    async patchBrand(updatedBrand: IBrand) {
        const brand = await this.repository.patchBrand(updatedBrand)
        return brand
    }

    async deleteBrand(id: IBrand['id']){
      id ? await this.repository.deleteBrand(id) :  null
    }

    async getById(id: IBrand['id']) {
      const brand = id && await this.repository.findById(id)
      return brand
    }

    async getBrands() {
      const brands = await this.repository.getBrands()
      return brands
    }

    async subscribeEvents(payload: EventsPayload) {
        console.log('Triggering.... Brand Events')
        const { event, data } =  payload;

        const { brand } = data;

        switch(event){
            case 'CREATE_BRAND':
                this.createBrand(brand)
                break;
            case 'PATCH_BRAND':
                this.patchBrand(brand)
                break;
            case 'DELETE_BRAND':
                brand.id && this.deleteBrand(brand.id)
                break;
            case 'TEST_BRAND':
                console.log('Brand Event HIT!')
                break;
            default:
                break;
        }
    }
}

export default BrandService
