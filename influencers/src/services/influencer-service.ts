import { IInfluencer } from '../database/models';
import InfluencerRepository from '../database/repository/influencer-repository'

type EventsPayload = {
  event: string
  data: {
    influencer: IInfluencer
  }
}

class InfluencerService {
    repository: InfluencerRepository
    constructor(){
        this.repository = new InfluencerRepository();
    }

    async createInfluencer(newInfluencer: IInfluencer){
        const influencer = await this.repository.createInfluencer(newInfluencer)
        return influencer
    }

    async patchInfluencer(updatedInfluencer: IInfluencer) {
        const influencer = await this.repository.patchInfluencer(updatedInfluencer)
        return influencer
    }

    async deleteInfluencer(id: IInfluencer['id']){
      id ? await this.repository.deleteInfluencer(id) :  null
    }

    async getById(id: string) {
      const influencer = await this.repository.findById(id)
      return influencer
    }

    async getInfluencers() {
      const influencers = await this.repository.getInfluencers()
      return influencers
    }


    async subscribeEvents(payload: EventsPayload) {
        console.log('Triggering.... Influencer Events')
        const { event, data } =  payload;

        const { influencer } = data;

        switch(event){
            case 'CREATE_INFLUENCER':
                this.createInfluencer(influencer)
                break;
            case 'TEST_INFLUENCER':
                console.log('Influencer Event HIT!')
                break;
            default:
                break;
        }
    }
}

export default InfluencerService
