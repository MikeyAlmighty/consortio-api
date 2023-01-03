import { PartnershipModel, IPartnership } from "../models";

class PartnershipRepository {
    async createPartnership({ description, brandId, influencerId, partnershipDate  }: IPartnership){
        try {
          const partnership = new PartnershipModel({
            description,
            origin,
            brandId,
            partnershipDate,
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

    async deletePartnership(id: string) {
       try {
         await PartnershipModel.findByIdAndDelete({ _id: id })
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

    async findByIPR(right: string){
         try {
            const partnerships = await PartnershipModel.find({ IPR: right });
            return partnerships;
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async findSelectedPartnerships(selectedIds: string[]){
         try {
           const partnerships = await PartnershipModel.find().where('_id').in(selectedIds.map(_id => _id)).exec();
           return partnerships;
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }
}

export default PartnershipRepository
