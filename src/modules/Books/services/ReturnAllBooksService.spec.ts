import FakesBooksRepository from '../repositories/fakes/FakesBooksRepository'
import { CreateBooksService, ReturnAllBooksService } from './'

describe('Return All Book', () => {
  it('should be able to return all books', async () => {
    const fakeBooksRepository = new FakesBooksRepository()
    const createABook = new CreateBooksService(fakeBooksRepository)

    await createABook.execute({
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

    const returnAllBooks = new ReturnAllBooksService(fakeBooksRepository)

    const returnAll = await returnAllBooks.execute()

    expect(returnAll).toBeTruthy()
  })
})
