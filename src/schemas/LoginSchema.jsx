import * as Yup from 'yup';

const LoginSchema = Yup.object({
    username : Yup.string().min(3).max(15).required('Username is required'),
    password : Yup.string().min(6).required('Password must be of minimum 6 characters long'),
});

export default LoginSchema;