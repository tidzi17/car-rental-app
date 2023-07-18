import * as yup from "yup";


/*      car: "",
        
       
        
*/

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const formSchema = yup.object().shape({
    name: yup.string().matches(/^[a-zA-Z]+ [a-zA-Z]+$/, 'Please enter your first and last name').required("First and Last names are required"),
    contact: yup.string().matches(phoneRegExp, "Phone number is not valid").required("Contact number is required"),
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email').required('Email is required'),
    pickupdate: yup.date().required("Pick up date is required"),
    dropofdate: yup.date().required("Drop of date is required"),
    pickuplocation: yup.string().required("Pick up location is required"),
    dropoflocation: yup.string().required("Drop of location i required"),
    car: yup.string().required("Car type selection is required"),

});