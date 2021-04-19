import Book from '@modules/Books/infra/mongoose/entities/Book'
import {
  ICreateBookDTO,
  IReturnBookDTO,
  ISearchBookDTO,
} from '@modules/Books/dtos'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'

class BooksRepository implements IBooksRepository {
  public async getAllBooks(): Promise<IReturnBookDTO[]> | undefined {
    const allBooks = await Book.find({})

    return allBooks
  }
  public async findByIsbn(isbn: number): Promise<IReturnBookDTO | undefined> {
    const findBookByIsbn = await Book.findOne({ isbn })

    return findBookByIsbn
  }
  public async create({
    name,
    author,
    value,
    isbn,
    publishing,
  }: ICreateBookDTO): Promise<IReturnBookDTO | undefined> {
    const createAnBook = await Book.create({
      name,
      author,
      isbn,
      value,
      publishing,
    })

    return createAnBook
  }
  public async findById(id: string): Promise<IReturnBookDTO | undefined> {
    const findBookById = await Book.findOne({ id })

    return findBookById
  }

  public async remove(isbn: number): Promise<IReturnBookDTO | undefined> {
    const findBookByIsbn = await Book.findOneAndDelete({ isbn })

    return findBookByIsbn
  }

  public async save({ name, author, isbn, value, publishing }: ICreateBookDTO) {
    const payload = Object.assign({ name, author, isbn, value, publishing })
    const book = await Book.findOneAndUpdate({ isbn }, payload, {
      returnOriginal: false,
    })

    return book
  }

  public async searchBook({
    name,
    author,
    value,
    isbn,
    publishing,
    rented,
  }: ISearchBookDTO): Promise<any> | undefined {
    const book = await Book.find({
      $or: [
        { name: { $in: name } },
        { author: { $in: author } },
        { isbn: { $in: isbn } },
        { value: { $in: value } },
        { value: { $in: value } },
        { publishing: { $in: publishing } },
        { rented: { $in: rented } },
      ],
    })

    return book
  }

  public async rentedBook(
    isbn: number,
    user_email: string,
    rented: boolean
  ): Promise<IReturnBookDTO> | undefined {
    const rentABook = await Book.findOneAndUpdate(
      { isbn },
      { rented },
      {
        returnOriginal: false,
      }
    )

    return rentABook
  }
}

export default BooksRepository
