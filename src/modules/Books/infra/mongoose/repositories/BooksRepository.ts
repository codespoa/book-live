import Book from '@modules/Books/infra/mongoose/entities/Book'
import IBooksRepository from '@modules/Books/repositories/IBooksRepository'
import ICreateBookDTO from '@modules/Books/dtos/ICreateBookDTO'
import IReturnBookDTO from '@modules/Books/dtos/IReturnBookDTO'

class BooksRepository implements IBooksRepository {
  public async getAllBooks(): Promise<IReturnBookDTO[]> | undefined {
    const allBooks = await Book.find({})

    return allBooks
  }
  public async findByIsbn(
    isbn: number
  ): Promise<IReturnBookDTO | IReturnBookDTO[] | undefined> {
    return new Promise((resolve) => resolve(null))
  }
  public async create(data: ICreateBookDTO): Promise<IReturnBookDTO> {
    return new Promise((resolve) => resolve(null))
  }
  public async findById(id: string): Promise<IReturnBookDTO | undefined> {
    return new Promise((resolve) => resolve(null))
  }
}

export default BooksRepository
