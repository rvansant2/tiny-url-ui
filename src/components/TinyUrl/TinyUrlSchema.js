import * as Yup from 'yup';

const TinyUrlSchema = Yup.object().shape({
  url: Yup.string().required('This field is required.'),
  slug: Yup.string(),
});

export default TinyUrlSchema;
