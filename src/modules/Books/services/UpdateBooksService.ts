import { AppError } from '@shared/error'
import { IReturnBookDTO, ICreateBookDTO } from '@modules/Books/dtos'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import Service from '@shared/protocols/Service'

export class UpdateBooksService implements Service {
  private booksRepository: IBooksRepository
  constructor(booksRepository: IBooksRepository) {
    this.booksRepository = booksRepository
  }

  public async execute({
    name,
    author,
    value,
    isbn,
    publishing,
  }: ICreateBookDTO): Promise<IReturnBookDTO> {
    const checkBookExists = await this.booksRepository.findByIsbn(isbn)

    if (!checkBookExists) throw new AppError('This book does not exist', 404)

    if (checkBookExists.rented)
      throw new AppError('You cannot update this book', 401)

    const updateAnBook = await this.booksRepository.save({
      name,
      author,
      value,
      isbn,
      publishing,
    })

    return updateAnBook
  }
}
