// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
import axios from 'axios'
const baseURl='http://localhost/HouseOfTutors_API/Api/'
const funcCall='tutor/GetStudentRequests'

const GetStudentRequests=async(email)=>{
    console.log('inside getting student requests functipon');
    const url=`${baseURl}${funcCall}?email=${email}`
    const response=await axios.get(url)
    const data=response.data
    return data
}
export {
    GetStudentRequests
}
// console.log('urls',urlw);
// const url='http://localhost/HouseOfTutors_API/Api/Student/StudentLogin?email=sohaib99@gmail.com&password=12345'
// console.log('string url is ',url);