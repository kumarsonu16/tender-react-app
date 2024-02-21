import * as Yup from 'yup';

export const validationSchema = Yup.object({
  vehicleId: Yup.string('Enter a vehicle number').required('Vehicle number is required')
});

export const initialValues = {
  vehicleId: ''
};
