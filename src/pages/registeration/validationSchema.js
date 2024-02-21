import * as Yup from 'yup';

export const validationSchema = Yup.object({
  model: Yup.string('Enter a vehicle number').required('Vehicle number is required'),
  type: Yup.string('Enter a typs of vehicle').required('Typs of vehicle is required'),
  status: Yup.string('Enter your status of vehicle').required('Status is required')
});

export const initialValues = {
  model: '',
  type: '',
  status: '',
};
