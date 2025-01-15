

import * as yup from "yup";


export const portfolioSchema=yup.object().shape({
    email:yup.string().email("Invalid Email Format").required("Email is required!"),
    name:yup.string().required("Name is required!"),
    message:yup.string().required("Message is required!")

})