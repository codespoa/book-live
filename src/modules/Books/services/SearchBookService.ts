import { IReturnBookDTO, ISearchBookDTO } from '@modules/Books/dtos'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
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
