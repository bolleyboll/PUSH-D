
import axios from 'axios'

const GET_PATIENT_DETAILS=`http://localhost:8080/patient/${sessionStorage.getItem("username")}`;
class UserService {

    getPatient(){
        return axios.get(GET_PATIENT_DETAILS);
    }

}

export default new UserService();

