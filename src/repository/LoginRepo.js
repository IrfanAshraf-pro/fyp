// http://localhost/New_HouseOfTutors_API/api/student/StudentLogin?email=sohail@gmail.com&password=1234abcd

import Repository from './Repository'
const LOGINSTUDENT="student/StudentLogin"

export default {
    getStudentLogin(email,password){
        return Repository.get(`${LOGINSTUDENT}?email=${email}&password=${password}`)
    }
}