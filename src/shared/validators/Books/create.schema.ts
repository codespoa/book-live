import yup from '@shared/lib/yup'

export default yup.object().shape({
  name: yup.string().required(),
  author: yup.string().required(),
  value: yup.number().required(),
  isbn: yup.number().required(),
  publishing: yup.string().required(),
})
