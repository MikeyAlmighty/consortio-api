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

    async createBrand(newBrand: IBrand){
        const brandResult = await this.repository.createBrand(newBrand)
        return brandResult
    }

    async getById(id: string) {
      const brand = await this.repository.findById(id)
      console.info('[Service]: returning brand by Id: ', brand)
      return brand
    }

    async getBrands() {
      const brands = await this.repository.getBrands()
      console.info('[Service]: returning brands: ', brands)
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
            case 'TEST_BRAND':
                console.log('Brand Event HIT!')
                // this.createBrand(brand)
                break;
            default:
                break;
        }
    }
}

export default BrandService
