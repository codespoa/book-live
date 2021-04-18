import { AppError } from '@shared/error'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import IReturnBookDTO from '@modules/Books/dtos/IReturnBookDTO'
import ICreateBookDTO from '@modules/Books/dtos/ICreateBookDTO'
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
