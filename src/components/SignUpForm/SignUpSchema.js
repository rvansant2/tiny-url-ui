import * as Yup from 'yup';

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string().required('This field is required.'),
  lastName: Yup.string().required('This field is required.'),
  email: Yup.string().email().required('This field is required.'),
  password: Yup.string().min(6, 'Password is too short.').max(20, 'Password is too long.').required('This field is required.'),
  confirmPassword: Yup.string()
    .min(6, 'Password is too short.')
    .max(20, 'Password is too long.')
    .required('This field is required.')
    .when('password', {
      is: (value) => !!(value && value.length > 0),
      then: Yup.string().oneOf([Yup.ref('password')], 'Both password need to be the same.'),
    }),
});

export default SignUpSchema;
