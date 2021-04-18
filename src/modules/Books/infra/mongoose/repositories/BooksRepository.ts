import Book from '@modules/Books/infra/mongoose/entities/Book'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import ICreateBookDTO from '@modules/Books/dtos/ICreateBookDTO'
import IReturnBookDTO from '@modules/Books/dtos/IReturnBookDTO'

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
    return new Promise((resolve) => resolve(null))
  }
}

export default BooksRepository
