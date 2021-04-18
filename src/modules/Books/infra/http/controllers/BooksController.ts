import { Request, Response } from 'express'

import CreateUserService from '@modules/Users/services/CreateUserService'
import ReturnAllBooksService from '@modules/Books/services/ReturnAllBooksService'
import BooksRepository from '@modules/Books/infra/mongoose/repositories/BooksRepository'
import { Controller } from '@shared/protocols'

export default class BooksController implements Controller {
  public async index(request: Request, response: Response): Promise<Response> {
    const bookRepository = new BooksRepository()
    const allBooks = await new ReturnAllBooksService(bookRepository).execute()

    return response.json(allBooks)
  }

  public async store(request: Request, response: Response): Promise<Response> {
    const {
      name,
      author,
      value,
      isbn,
      publishing,
      rented_name,
      rented,
    } = request.body

    return new Promise((resolve) => resolve(null))
  }

  show(request: Request, response: Response): Promise<Response> {
    return new Promise((resolve) => resolve(null))
  }
  delete(request: Request, response: Response): Promise<Response> {
    return new Promise((resolve) => resolve(null))
  }
  save(request: Request, response: Response): Promise<Response> {
    return new Promise((resolve) => resolve(null))
  }
}
