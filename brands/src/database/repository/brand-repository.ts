import { BrandModel, IBrand } from "../models";

class BrandRepository {
    async createBrand({ name, origin, active, incorporationDate, IPR }: IBrand){
        try {
          const brand = new BrandModel({
            name, origin, active, incorporationDate, IPR
          })
          const brandResult = await brand.save();
          return brandResult;
        } catch (error) {
            console.error(error)
            // throw new Error('API Error', STATUS_CODES)
        }
    }

     async getBrands(){
         try {
           const brands = await BrandModel.find();
           console.log('[Repository]: returning brands: ', brands)
           return brands
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async findById(id: string){
         try {
           const brand =  await BrandModel.findById(id);
           console.log('[Repository]: returning brand with Id: ', brand)
           return brand
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async findByIPR(right: string){
         try {
            const brands = await BrandModel.find({ IPR: right });
            return brands;
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async findSelectedBrands(selectedIds: string[]){
         try {
           const brands = await BrandModel.find().where('_id').in(selectedIds.map(_id => _id)).exec();
           return brands;
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }
}

export default BrandRepository;
