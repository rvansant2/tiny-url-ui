import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email().required('This field is required.'),
  password: Yup.string().min(6, 'Password is too short.').max(20, 'Password is too long.').required('This field is required.'),
});

export default LoginSchema;
