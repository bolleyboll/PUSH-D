
import axios from 'axios'

const GET_PATIENT_DETAILS=`http://localhost:8080/patient/${sessionStorage.getItem("username")}`;
const GET_PATIENTS=`http://localhost:8080/doctor/${sessionStorage.getItem("username")}/patients`;
const GET_DOCTOR_DETAILS='http://localhost:8081/doctors';
const GET_ALL_PATIENT_DETAILS = 'http://localhost:8081/patients'
class UserService {

    getPatient(){
        return axios.get(GET_PATIENT_DETAILS);
    }
    getPatients(){
        return axios.get(GET_PATIENTS);
    }
    getDoctor(){
        return axios.get(GET_DOCTOR_DETAILS);
    }
    getAllPatients(){
        return axios.get(GET_ALL_PATIENT_DETAILS);
    }

}

export default new UserService();

