import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import { IReturnBookDTO } from '@modules/Books/dtos'
import Service from '@shared/protocols/Service'

export class ReturnAllBooksService implements Service {
  private booksRepository: IBooksRepository
  constructor(booksRepository: IBooksRepository) {
    this.booksRepository = booksRepository
  }

  public async execute(): Promise<IReturnBookDTO[]> {
    return await this.booksRepository.getAllBooks()
  }
}
