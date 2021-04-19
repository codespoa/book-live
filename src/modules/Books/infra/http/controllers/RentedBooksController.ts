import { Request, Response } from 'express'
import { RentedBooksService } from '@modules/Books/services'
import BooksRepository from '@modules/Books/infra/mongoose/repositories/BooksRepository'
import UsersRepository from '@modules/Users/infra/mongoose/repositories/UsersRepository'

export default class RentedBooksController {
  public async rented(request: Request, response: Response): Promise<Response> {
    const { isbn, user_email, rented } = request.body

    const booksRepository = new BooksRepository()
    const usersRepository = new UsersRepository()

    const rentedBook = await new RentedBooksService(
      booksRepository,
      usersRepository
    ).execute({ isbn, user_email, rented })

    return response.json(rentedBook)
  }
}
