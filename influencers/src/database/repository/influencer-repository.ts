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
          const influencerResult = await influencer.save();
          return influencerResult
        } catch (error) {
            console.error(error)
            // throw new Error('API Error', STATUS_CODES)
        }
    }

    async patchInfluencer({ id, firstName, lastName, socialDetails, clicks, posts }: IInfluencer){
        try {
          await InfluencerModel.findByIdAndUpdate(id, {
              firstName,
              lastName,
              socialDetails
          })
        } catch (error) {
            console.error(error)
            // throw new Error('API Error', STATUS_CODES)
        }
    }

     async getInfluencers(){
         try {
           const influencers = await InfluencerModel.find();
           return influencers
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async findById(id: string){
         try {
           const influencer =  await InfluencerModel.findById(id);
           return influencer
         } catch (error) {
           console.error(error)
           // throw new Error('API Error', STATUS_CODES)
         }
    }

    async deleteInfluencer(id: string) {
       try {
         await InfluencerModel.findByIdAndDelete({ _id: id })
       } catch (error) {
         console.error(error)
       }
    }

}

export default InfluencerRepository;
