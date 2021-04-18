import { v4 as uuid } from 'uuid'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import Book from '@modules/Books/infra/mongoose/entities/Book'
import IReturnBookDTO from '@modules/Books/dtos/IReturnBookDTO'
import ICreateBookDTO from '@modules/Books/dtos/ICreateBookDTO'

export interface IBookInterface {
  name: string
  author: string
  value: number
  isbn: number
  publishing: string
  rented_name: string
  rented: boolean
  _id: string
}

export default class BooksRepository implements IBooksRepository {
  private books: IReturnBookDTO[] = []

  public async getAllBooks(): Promise<IReturnBookDTO[] | undefined> {
    const book = new Book()
    const book2 = new Book()

    const allBooks = Object.assign(book, book2, { _id: uuid() })

    this.books.push(book, book2)

    return allBooks
  }

  public async findByIsbn(isbn: number): Promise<IReturnBookDTO | undefined> {
    const findBook = this.books.find((book) => book.isbn === isbn)

    return findBook
  }

  public async findById(id: string): Promise<IReturnBookDTO | undefined> {
    const findBook = this.books.find((book) => book._id === id)

    return findBook
  }

  public async create(payload: ICreateBookDTO): Promise<IReturnBookDTO> {
    const book = new Book()

    Object.assign(book, { _id: uuid() }, payload)

    this.books.push(book)

    return book
  }

  public async save(book: IBookInterface): Promise<IReturnBookDTO> {
    const findIndex = this.books.findIndex(
      (findBook) => findBook._id === book._id
    )

    this.books[findIndex] = book

    return book
  }
}
