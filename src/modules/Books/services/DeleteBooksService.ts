import { AppError } from '@shared/error'
import { IReturnBookDTO } from '@modules/Books/dtos'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import Service from '@shared/protocols/Service'

export class DeleteBooksService implements Service {
  private booksRepository: IBooksRepository
  constructor(booksRepository: IBooksRepository) {
    this.booksRepository = booksRepository
  }

  public async execute(isbn: number): Promise<IReturnBookDTO> {
    const checkBookExists = await this.booksRepository.findByIsbn(isbn)

    if (!checkBookExists) throw new AppError('This book does not exist', 404)

    const deleteAnBook = await this.booksRepository.remove(isbn)

    return deleteAnBook
  }
}
