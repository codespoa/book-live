import {
  ICreateBookDTO,
  ISearchBookDTO,
  IReturnBookDTO,
  IRentedBookDTO,
} from '@modules/Books/dtos'

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
  save({
    name,
    author,
    value,
    isbn,
    publishing,
  }: ICreateBookDTO): Promise<IReturnBookDTO | undefined>
  searchBook({
    name,
    author,
    value,
    isbn,
    publishing,
    rented,
  }: ISearchBookDTO): Promise<any> | undefined
  rentedBook(
    isbn: number,
    user_email: string,
    rented: boolean
  ): Promise<any> | undefined
  // unrentedBook(id: string, bookId: string): Promise<any> | undefined
}
