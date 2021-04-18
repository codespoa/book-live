import ICreateBookDTO from '@modules/Books/dtos/ICreateBookDTO'
import IReturnBookDTO from '@modules/Books/dtos/IReturnBookDTO'

export default interface IBooksRepository {
  getAllBooks(): Promise<IReturnBookDTO[]> | undefined
  findByIsbn(isbn: number): Promise<IReturnBookDTO | undefined>
  create({
    name,
    author,
    value,
    isbn,
    publishing,
  }: ICreateBookDTO): Promise<IReturnBookDTO | undefined>
  findById(id: string): Promise<IReturnBookDTO | undefined>
  remove(isbn: number): Promise<any>
  // save(user: IcreateUser): Promise<IReturnUserDTO>
  // favoriteBook(id: string, bookId: string): Promise<any> | undefined
  // unfavoriteBook(id: string, bookId: string): Promise<any> | undefined
}
