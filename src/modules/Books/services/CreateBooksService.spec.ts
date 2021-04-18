import { AppError } from '@shared/error'

import FakesBooksRepository from '../repositories/fakes/FakesBooksRepository'
import { CreateBooksService } from './'

describe('Create Book', () => {
  it('should be able create a book', async () => {
    const fakeBooksRepository = new FakesBooksRepository()
    const createABook = new CreateBooksService(fakeBooksRepository)

    const response = await createABook.execute({
      name: 'A Book',
      author: 'An Author',
      value: 12.5,
      isbn: 73823701,
      publishing: 'The publishing',
    })

    expect(response).toBeTruthy()
  })

  it('should fail if isbn already in use on system', async () => {
    const fakeBooksRepository = new FakesBooksRepository()
    const createABook = new CreateBooksService(fakeBooksRepository)

    await createABook.execute({
      name: 'A Book',
      author: 'An Author',
      value: 12.5,
      isbn: 73823701,
      publishing: 'The publishing',
    })

    expect(
      createABook.execute({
        name: 'Other Book',
        author: 'Other Author',
        value: 5.5,
        isbn: 73823701,
        publishing: 'Other the publishing',
      })
    ).rejects.toBeInstanceOf(AppError)
  })
})
