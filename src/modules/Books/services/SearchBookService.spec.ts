import FakesBooksRepository from '../repositories/fakes/FakesBooksRepository'
import { SearchBookService, CreateBooksService } from '.'

describe('Search Book', () => {
  it('should be able to show a book', async () => {
    const fakeBooksRepository = new FakesBooksRepository()
    const createABook = new CreateBooksService(fakeBooksRepository)

    const create = await createABook.execute({
      name: 'A Book',
      author: 'An Author',
      value: 12.5,
      isbn: 73823701,
      publishing: 'The publishing',
    })

    const searchBookService = new SearchBookService(fakeBooksRepository)

    const returnSearchBooks = await searchBookService.execute({
      name: create.name,
    })

    expect(returnSearchBooks).toBeTruthy()
    expect(returnSearchBooks).toHaveProperty('name')
  })
})
