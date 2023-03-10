import axios from 'axios'
const baseURl = 'http://localhost/HouseOfTutors_API/Api/'
const funcCallStudent = 'student/StudentSchedule'
const funcCallTutor = 'tutor/TutorSchedule'
const funcGetStudentSchedule = 'student/GetStudentSchedule'
const funcGetTutorSchedule = 'tutor/GetTutorSchedule'


const setUserSchedule = async (role, email, details) => {
    console.log(`inside scheduel ${role}  ${email} ${details}`);
    if (role === 'Student') {
        console.log('inside student schedule');
        const url = `${baseURl}${funcCallStudent}?email=${email}&details=${details}`
        console.log(url);
        const response = await axios.post(url)
        const data = response.data
        console.log('data is', data);
        return data
    } else {
        console.log('tutor schedule');
        const url = `${baseURl}${funcCallTutor}?email=${email}&details=${details}`
        console.log(url);
        const response = await axios.post(url)
        const data = response.data
        console.log('data is', data);
        return data
    }
}
const getSchedule = async(role, email) => {
    if (role === 'Student') {
        console.log('inside get student schedule');
        const url = `${baseURl}${funcGetStudentSchedule}?email=${email}`
        console.log(url);
        const response = await axios.get(url)
        const data = response.data
        console.log('data is', data);
        return data
    } else {
        console.log('inside get tutor schedule');
        const url = `${baseURl}${funcGetTutorSchedule}?email=${email}`
        console.log(url);
        const response = await axios.get(url)
        const data = response.data
        console.log('data is', data);
        return data
    }
}

export {
    setUserSchedule,
    getSchedule
}