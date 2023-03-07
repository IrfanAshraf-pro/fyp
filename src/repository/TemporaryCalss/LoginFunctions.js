// chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
import axios from 'axios'
const baseURl='http://localhost/HouseOfTutors_API/Api/'
const funcCall='Login/Login'

const LoginUser=async(email,password)=>{
    console.log('inside login functipon');
    const url=`${baseURl}${funcCall}?email=${email}&password=${password}`
    const response=await axios.get(url)
    const data=response.data
    return data
}
export {
    LoginUser
}
// console.log('urls',urlw);
// const url='http://localhost/HouseOfTutors_API/Api/Student/StudentLogin?email=sohaib99@gmail.com&password=12345'
// console.log('string url is ',url);