export default function validateSignup(values,isTutor) {
    let errors = {};
    if (!values.name) {
        errors.name = 'Name is required';
    } else if (values.name.length <2) {
        errors.name = 'Name must be atleast two characters';
    }
    if (!values.email) {
        errors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email address is invalid';
    }
    if (!values.cgpa) {
        errors.cgpa = 'CGPA is required';
    } else if (values.cgpa < 1) {
        errors.cgpa = 'CGPA must be higher than 1';
    }
    if(!isTutor){
        if (!values.fathercnic) {
            errors.fathercnic = 'Father cnic is required';
        } else if (values.fathercnic.length !== 13) {
            errors.fathercnic = 'Father cnic must be 13 characters';
        }
    }
    if (!values.semester) {
        errors.semester = 'Semester is required';
    } else if (values.semester < 1) {
        errors.semester = 'Please Enter correct semester no';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 5) {
        errors.password = 'Password must be 5 or more characters';
    }
    if (!values.contact) {
        errors.contact = 'Contact no is required';
    } else if (values.contact.length !==11) {
        errors.contact = 'Please enter correct contact no';
    }
    return errors;
}