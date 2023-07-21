import * as yup from 'yup';

export const hueValidationSchema = yup.object().shape({
  color: yup.string().required(),
  user_id: yup.string().nullable(),
});
