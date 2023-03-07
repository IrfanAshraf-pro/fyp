import axios from 'axios'
const baseURl='http://localhost/HouseOfTutors_API/Api/'
const funcCall='admin/GetCourses'

const GetAllCourses=async()=>{
    console.log('getting all courses');
    const url=`${baseURl}${funcCall}`
    const response=await axios.get(url)
    const data=response.data
    return data
}
export {
    GetAllCourses
}
