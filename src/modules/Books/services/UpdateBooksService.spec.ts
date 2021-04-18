import { AppError } from '@shared/error'
import FakesBooksRepository from '../repositories/fakes/FakesBooksRepository'
import { UpdateBooksService, CreateBooksService } from '.'

describe('Update Book', () => {
  it('should be able to update a book', async () => {
    const fakeBooksRepository = new FakesBooksRepository()
    const createABook = new CreateBooksService(fakeBooksRepository)

    await createABook.execute({
      name: 'A Book',
      author: 'An Author',
      value: 12.5,
      isbn: 73823701,
      publishing: 'The publishing',
    })

    const showBooksService = new UpdateBooksService(fakeBooksRepository)

    const returnAllBooks = await showBooksService.execute({
      name: 'Other Book',
      author: 'Other Author',
      value: 10,
      isbn: 73823701,
      publishing: 'Other publishing',
    })

    expect(returnAllBooks).toBeTruthy()
    expect(returnAllBooks).toHaveProperty('name')
    expect(returnAllBooks).toHaveProperty('author')
    expect(returnAllBooks).toHaveProperty('value')
    expect(returnAllBooks).toHaveProperty('isbn')
    expect(returnAllBooks).toHaveProperty('publishing')
  })

  it('should fail if isbn not exists in system', async () => {
    const fakeBooksRepository = new FakesBooksRepository()
    const updateABook = new UpdateBooksService(fakeBooksRepository)

    await expect(
      updateABook.execute({
        name: 'A Book',
        author: 'An Author',
        value: 12.5,
        isbn: 123,
        publishing: 'The publishing',
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
