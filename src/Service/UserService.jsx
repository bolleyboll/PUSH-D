
import axios from 'axios'

const GET_PATIENT_DETAILS=`http://localhost:8080/patient/${sessionStorage.getItem("username")}`;
const GET_PATIENTS=`http://localhost:8080/doctor/${sessionStorage.getItem("username")}/patients`;
const GET_SPEC_PATIENTS="http://localhost:8080/patients"
const GET_DOCTORS="http://localhost:8080/doctors"
const GET_CHAT=`http://localhost:8080/chat/get/${sessionStorage.getItem("username")}`
class UserService {

    getPatient(){
        return axios.get(GET_PATIENT_DETAILS);
    }
    getPatients(){
        return axios.get(GET_PATIENTS);
    }
    getSpecPatients(){
        return axios.get(GET_SPEC_PATIENTS);
    }
    getSpecDoctors(){
        return axios.get(GET_DOCTORS);
    }
    getChats(){
        return axios.get(GET_CHAT)
    }
}

export default new UserService();

