import { v4 as uuid } from 'uuid'
import {
  IReturnBookDTO,
  ICreateBookDTO,
  ISearchBookDTO,
} from '@modules/Books/dtos'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import Book from '@modules/Books/infra/mongoose/entities/Book'

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

  public async save({
    name,
    author,
    value,
    isbn,
    publishing,
  }: ICreateBookDTO | any): Promise<IReturnBookDTO> {
    const findIndex = this.books.findIndex((findBook) => findBook.isbn === isbn)
    const payload = Object.assign({ name, author, isbn, value, publishing })

    this.books[findIndex] = payload

    return payload
  }

  public async remove(isbn: number): Promise<any> {
    const findIndex = this.books.findIndex((book) => book.isbn === isbn)

    const removeBook = this.books.splice(findIndex, 1)

    return removeBook
  }

  public async searchBook({
    name,
    author,
    value,
    isbn,
    publishing,
    rented,
  }: ISearchBookDTO): Promise<any> {
    const findBook = this.books.find(
      (book) =>
        book.name === name ||
        book.author === author ||
        book.value === value ||
        book.isbn === isbn ||
        book.publishing === publishing ||
        book.rented === rented
    )

    return findBook
  }

  public async rentedBook(
    isbn: number,
    user_email: string,
    rented: boolean
  ): Promise<IReturnBookDTO> | undefined {
    const findIndex = this.books.findIndex((findBook) => findBook.isbn === isbn)

    this.books[findIndex].rented = rented

    return this.books[findIndex]
  }
}
