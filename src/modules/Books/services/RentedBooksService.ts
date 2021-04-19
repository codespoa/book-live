import { AppError } from '@shared/error'
import { IRentedBookDTO } from '@modules/Books/dtos'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import IUsersRepository from '@modules/Users/repositories/IUsersRepository'
import Service from '@shared/protocols/Service'

export class RentedBooksService implements Service {
  private booksRepository: IBooksRepository
  private usersRepository: IUsersRepository
  constructor(
    booksRepository: IBooksRepository,
    usersRepository: IUsersRepository
  ) {
    this.booksRepository = booksRepository
    this.usersRepository = usersRepository
  }

  public async execute({
    isbn,
    user_email,
    rented,
  }: IRentedBookDTO): Promise<any> {
    const checkUserExists = this.usersRepository.findByEmail(user_email)

    if (!checkUserExists) throw new AppError('This user does not exist', 404)

    const checkBookExists = this.booksRepository.findByIsbn(isbn)

    if (!checkBookExists) throw new AppError('This book does not exist', 404)

    const rentedBook = this.booksRepository.rentedBook(isbn, rented)

    return rentedBook
  }
}
