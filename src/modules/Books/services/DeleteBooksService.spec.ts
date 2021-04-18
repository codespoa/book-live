import FakesBooksRepository from '../repositories/fakes/FakesBooksRepository'
import { CreateBooksService, DeleteBooksService } from './'

describe('Delete a Book', () => {
  it('should be able delete a book', async () => {
    const fakeBooksRepository = new FakesBooksRepository()
    const createABook = new CreateBooksService(fakeBooksRepository)

    const book = await createABook.execute({
      name: 'A Book',
      author: 'An Author',
      value: 12.5,
      isbn: 73823701,
      publishing: 'The publishing',
    })

    await createABook.execute({
      name: 'Other Book',
      author: 'Other Author',
      value: 5.5,
      isbn: 1234,
      publishing: 'Other the publishing',
    })

    const deleteAnBook = new DeleteBooksService(fakeBooksRepository)

    const returnAll = await deleteAnBook.execute(Number(book.isbn))

    expect(returnAll).toBeTruthy()
  })
})
