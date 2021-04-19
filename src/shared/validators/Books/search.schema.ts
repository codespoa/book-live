import yup from '@shared/lib/yup'

export default yup.object().shape({
  name: yup.array(),
  author: yup.array(),
  value: yup.array(),
  isbn: yup.array(),
  publishing: yup.array(),
  rented: yup.array(),
})
