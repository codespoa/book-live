import { AppError } from '@shared/error'
import { IReturnBookDTO, ICreateBookDTO } from '@modules/Books/dtos'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import Service from '@shared/protocols/Service'

export class CreateBooksService implements Service {
  private booksRepository: IBooksRepository
  constructor(booksRepository: IBooksRepository) {
    this.booksRepository = booksRepository
  }

  public async execute(payload: ICreateBookDTO): Promise<IReturnBookDTO> {
    const { name, author, value, isbn, publishing } = payload

    const checkUserBookExists = await this.booksRepository.findByIsbn(isbn)

    if (checkUserBookExists)
      throw new AppError('This book already in system', 409)

    const createAnBook = await this.booksRepository.create({
      name,
      author,
      value,
      isbn,
      publishing,
    })

    return createAnBook
  }
}
