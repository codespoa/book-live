import yup from '@shared/lib/yup'

export default yup.object().shape({
  isbn: yup.number().required(),
  user_email: yup.string().email().required(),
  rented: yup.boolean().required(),
})
