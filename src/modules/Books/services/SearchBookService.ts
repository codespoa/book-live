import { AppError } from '@shared/error'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import IReturnBookDTO from '@modules/Books/dtos/IReturnBookDTO'
import ISearchBookDTO from '@modules/Books/dtos/ISearchBookDTO'
import Service from '@shared/protocols/Service'

export class SearchBookService implements Service {
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
    rented,
  }: ISearchBookDTO): Promise<IReturnBookDTO> {
    const searchBook = this.booksRepository.searchBook({
      name,
      author,
      value,
      isbn,
      publishing,
      rented,
    })

    return searchBook
  }
}
