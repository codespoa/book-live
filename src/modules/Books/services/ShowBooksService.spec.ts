import FakesBooksRepository from '../repositories/fakes/FakesBooksRepository'
import { ShowBooksService, CreateBooksService } from '.'

describe('Show Book', () => {
  it('should be able to show a book', async () => {
    const fakeBooksRepository = new FakesBooksRepository()
    const createABook = new CreateBooksService(fakeBooksRepository)

    const showBook = await createABook.execute({
      name: 'A Book',
      author: 'An Author',
      value: 12.5,
      isbn: 73823701,
      publishing: 'The publishing',
    })

    const showBooksService = new ShowBooksService(fakeBooksRepository)

    const returnAllBooks = await showBooksService.execute(showBook.isbn)

    expect(returnAllBooks).toBeTruthy()
    expect(returnAllBooks).toHaveProperty('_id')
    expect(returnAllBooks).toHaveProperty('name')
    expect(returnAllBooks).toHaveProperty('author')
    expect(returnAllBooks).toHaveProperty('value')
    expect(returnAllBooks).toHaveProperty('isbn')
    expect(returnAllBooks).toHaveProperty('publishing')
  })
})
