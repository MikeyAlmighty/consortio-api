import { PartnershipModel, IPartnership } from "../models";

class PartnershipRepository {
    async createPartnership({
        description,
        brandId,
        influencerId,
        productId,
        partnershipDate
    }: IPartnership){
        try {
          const partnership = new PartnershipModel({
            description,
            brandId,
            partnershipDate,
            productId,
            influencerId,
            isActive: true
          })

          const partnershipResult = await partnership.save();
          return partnershipResult;
        } catch (error) {
            console.error(error)
            // throw new Error('API Error', STATUS_CODES)
        }
    }

     async getPartnerships(){
         try {
           const partnerships = await PartnershipModel.find();
           return partnerships
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async terminatePartnership(id: string) {
       try {
         await PartnershipModel.findByIdAndUpdate(id, { isActive: false })
       } catch (error) {
         console.error(error)
       }
    }

    async findById(id: string) {
         try {
           const partnership =  await PartnershipModel.findById(id);
           console.log('[Repository]: returning partnership with Id: ', partnership)
           return partnership
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }
}

export default PartnershipRepository
