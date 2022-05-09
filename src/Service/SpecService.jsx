
import axios from 'axios'

const GET_SPECIALIST_DETAILS='http://localhost:8081/specialists';
class SpecService {

    getSpecialist(){
        return axios.get(GET_SPECIALIST_DETAILS);
    }

}

export default new SpecService();

