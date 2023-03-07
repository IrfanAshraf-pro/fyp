import axios from 'axios'
const baseURl = 'http://localhost/HouseOfTutors_API/Api/'
const funcCallStudent = 'student/StudentSignup'
const funcCallTutor = 'tutor/TutorSignup'

const SignupUser = async (user) => {
    if (user.type === 'student') {
        delete user.type
        console.log('inside signup as student', user);
        const url = `${baseURl}${funcCallStudent}`
        console.log(url);
        const response = await axios.post(url, user)
        const data = response.data
        console.log('data is', data);
        return data
    } else {
        delete user.type
        delete user.fathercnic
        console.log('inside signup as tutor', user);
        const url = `${baseURl}${funcCallTutor}`
        console.log(url);
        const response = await axios.post(url, user)
        const data = response.data
        console.log('data is', data);
        return data
    }

}
// const signUpStudent=async(user)=>{


// }
// const signUpTutor=async(user)=>{


// }

// const LoginUser=async(email,password)=>{
//     console.log('inside login functipon');
//     const url=`${baseURl}${funcCall}?email=${email}&password=${password}`
//     const response=await axios.get(url)
//     const data=response.data
//     return data
// }
export {
    SignupUser
}