import { IPartnership } from '../database/models';
import PartnershipRepository from '../database/repository/partnership-repository'

type EventsPayload = {
  event: string
  data: {
    partnership: IPartnership
  }
}

class PartnershipService {
    repository: PartnershipRepository
    constructor(){
        this.repository = new PartnershipRepository();
    }

    async createPartnership(newPartnership: IPartnership) {
        const partnership = await this.repository.createPartnership(newPartnership)
        return partnership
    }

   async terminatePartnership(id: IPartnership['id']){
      id ? await this.repository.terminatePartnership(id) :  null
    }

    async getById(id: IPartnership['id']) {
      const partnership = id && await this.repository.findById(id)
      return partnership
    }

    async getPartnerships() {
      const partnerships = await this.repository.getPartnerships()
      return partnerships
    }

    async subscribeEvents(payload: EventsPayload) {
        console.log('Triggering.... Partnership Events')
        const { event, data } =  payload;

        const { partnership } = data;

        switch(event){
            case 'CREATE_PARTNERSHIP':
                this.createPartnership(partnership)
                break;
                break;
            case 'TERMINATE_PARTNERSHIP':
                partnership.id && this.terminatePartnership(partnership.id)
                break;
            case 'TEST_PARTNERSHIP':
                console.log('Partnership Event HIT!')
                break;
            default:
                break;
        }
    }
}

export default PartnershipService
