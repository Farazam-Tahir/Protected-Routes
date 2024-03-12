import * as Yup from 'yup';

const SignUpSchema = Yup.object({
    username : Yup.string().min(3).max(15).required('Username is required'),
    email : Yup.string().email().required('Email is Required'),
    password : Yup.string().min(6).required('Password must be of minimum 6 characters long'),
    confirmPassword : Yup.string().required('Confirm Password is required').oneOf([Yup.ref('password'), null], 'Password must match')
});

// const LoginSchema = Yup.object({
//     username : Yup.string().min(3).max(15).required('Username is required'),
//     password : Yup.string().min(6).required('Password must be of minimum 6 characters long'),

// });

export default SignUpSchema;
// export {LoginSchema};