import { Request, Response } from 'express'

import {
  CreateBooksService,
  ReturnAllBooksService,
  ShowBooksService,
  DeleteBooksService,
  UpdateBooksService,
} from '@modules/Books/services'
import BooksRepository from '@modules/Books/infra/mongoose/repositories/BooksRepository'
import { Controller } from '@shared/protocols'

export default class BooksController implements Controller {
  public async index(request: Request, response: Response): Promise<Response> {
    const bookRepository = new BooksRepository()
    const allBooks = await new ReturnAllBooksService(bookRepository).execute()

    return response.json(allBooks)
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const { name, author, value, isbn, publishing } = request.body

    const bookRepository = new BooksRepository()
    const createABook = await new CreateBooksService(bookRepository).execute({
      name,
      author,
      value,
      isbn,
      publishing,
    })

    return response.json(createABook)
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { isbn } = request.params

    const bookRepository = new BooksRepository()
    const showABook = await new ShowBooksService(bookRepository).execute(
      Number(isbn)
    )

    return response.json(showABook)
  }
  public async delete(request: Request, response: Response): Promise<Response> {
    const { isbn } = request.params

    const bookRepository = new BooksRepository()
    await new DeleteBooksService(bookRepository).execute(Number(isbn))

    return response.json({ message: 'Book delete on success' })
  }
  public async update(request: Request, response: Response): Promise<Response> {
    const { name, author, value, isbn, publishing } = request.body

    const bookRepository = new BooksRepository()
    const udpateABook = await new UpdateBooksService(bookRepository).execute({
      name,
      author,
      value,
      isbn,
      publishing,
    })

    return response.json(udpateABook)
  }
}
