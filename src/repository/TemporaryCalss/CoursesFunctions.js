import axios from 'axios'
import {useSelector} from 'react-redux'
const baseURl = 'http://localhost/HouseOfTutors_API/Api/'
const funcCall = 'admin/GetCourses'
const funcCallStudent = 'student/GetStudentEnlistedCourses'
const funcCallTutor = 'tutor/GetTutorEnlistedCourses'
const funcCallTutorEnlist='tutor/TutorCourseEnlist'
const funcCallStudentEnlist='student/StudentCourseEnlist'
const GetAllCourses = async () => {
    console.log('getting all courses');
    const url = `${baseURl}${funcCall}`
    const response = await axios.get(url)
    const data = response.data
    return data
}
const GetAllEnrolledCourses = async (role, email) => {
    console.log('inside getting all courses');
    console.log('comparison is ', role === 'Student');
    if (role === 'Student') {
        console.log('getting all student courses');
        const url = `${baseURl}${funcCallStudent}?semail=${email}`
        const response = await axios.get(url)
        const data = response.data
        return data
    } else {
        console.log('getting all tutor courses');
        const url = `${baseURl}${funcCallTutor}?email=${email}`
        const response = await axios.get(url)
        const data = response.data
        return data
    }
}
const EnrollingCourse=async(role,email,courseid,coursegrade='')=>{
    console.log(`role is ${role} email is ${email} course id is ${courseid} and course grade is ${coursegrade}`);
    if (role === 'Student') {
        console.log('enrolling student course');
        const url = `${baseURl}${funcCallStudentEnlist}?semail=${email}&cid=${courseid}`
        console.log(url);
        const response = await axios.post(url)
        const data = response.data
        return data
    } else {
        console.log('enrolling tutor course');
        const url = `${baseURl}${funcCallTutorEnlist}?email=${email}&cid=${courseid}&grade=${coursegrade}`
        const response = await axios.post(url)
        const data = response.data
        return data
    }
}
export {
    GetAllCourses,
    GetAllEnrolledCourses,
    EnrollingCourse
}
