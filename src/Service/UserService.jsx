
import axios from 'axios'

const GET_PATIENT_DETAILS=`http://localhost:8080/patient/${sessionStorage.getItem("username")}`;
const GET_PATIENTS=`http://localhost:8080/doctor/${sessionStorage.getItem("username")}/patients`;
class UserService {

    getPatient(){
        return axios.get(GET_PATIENT_DETAILS);
    }
    getPatients(){
        return axios.get(GET_PATIENTS);
    }

}

export default new UserService();

