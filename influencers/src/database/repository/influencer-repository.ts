import { InfluencerModel, IInfluencer } from "../models";

class InfluencerRepository {
    async createInfluencer({ firstName, lastName, handle, clicks, posts, socialDetails }: IInfluencer){
        try {
          const influencer = new InfluencerModel({
              firstName,
              lastName,
              handle,
              clicks,
              posts,
              socialDetails
          })
          console.info('submitting: ', influencer)
          const influencerResult = await influencer.save();
          return influencerResult;
        } catch (error) {
            console.error(error)
            // throw new Error('API Error', STATUS_CODES)
        }
    }

     async getInfluencers(){
         try {
           const influencers = await InfluencerModel.find();
           console.log('[Repository]: returning influencers: ', influencers)
           return influencers
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async findById(id: string){
         try {
           const influencer =  await InfluencerModel.findById(id);
           console.log('[Repository]: returning influencer with Id: ', influencer)
           return influencer
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }
}

export default InfluencerRepository;
