import { Request, Response } from 'express'
import { SearchBookService } from '@modules/Books/services'
import BooksRepository from '@modules/Books/infra/mongoose/repositories/BooksRepository'

export default class SearchBooksController {
  public async search(request: Request, response: Response): Promise<Response> {
    const { name, author, value, isbn, publishing, rented } = request.body

    Number(value)
    Number(isbn)
    Boolean(rented)

    const bookRepository = new BooksRepository()
    const searchBooks = await new SearchBookService(bookRepository).execute({
      name,
      author,
      value,
      isbn,
      publishing,
      rented,
    })

    return response.json(searchBooks)
  }
}
