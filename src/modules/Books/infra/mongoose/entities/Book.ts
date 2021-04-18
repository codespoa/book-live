import { Schema, model } from 'mongoose'
import paginate from '@config/mongoose-paginate'

const Book: Schema = new Schema(
  {
    name: { type: String, required: true },
    author: { type: String, required: true },
    value: { type: Number, required: true },
    isbn: { type: Number, required: true, unique: true },
    publishing: { type: String, required: true },
    rented_name: { type: String },
    rented: { type: Boolean, default: false },
  },
  { timestamps: true, selectPopulatedPaths: true }
)

Book.plugin(paginate)

export default model('Book', Book)
