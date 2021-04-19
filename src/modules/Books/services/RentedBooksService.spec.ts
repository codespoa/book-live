import FakesBooksRepository from '../repositories/fakes/FakesBooksRepository'
import { CreateBooksService, RentedBooksService } from './'
import { CreateUserService } from '@modules/Users/services'
import FakesUserRepository from '@modules/Users/repositories/fakes/FakesUserRepository'

describe('Rented a Book', () => {
  it('should be able change status rented a book', async () => {
    const fakeUsersRepository = new FakesUserRepository()
    const fakeBooksRepository = new FakesBooksRepository()
    const createAnUser = new CreateUserService(fakeUsersRepository)
    const createABook = new CreateBooksService(fakeBooksRepository)

    const user = await createAnUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    })

    const book = await createABook.execute({
      name: 'A Book',
      author: 'An Author',
      value: 12.5,
      isbn: 73823701,
      publishing: 'The publishing',
    })

    const rentedABook = new RentedBooksService(
      fakeBooksRepository,
      fakeUsersRepository
    )

    const isbn = book.isbn
    const user_email = user.email
    const rented = true

    const rentABook = await rentedABook.execute({ isbn, user_email, rented })

    expect(rentABook).toBeTruthy()
  })

  it('should not able change status rented a book if user not exists', async () => {
    const fakeUsersRepository = new FakesUserRepository()
    const fakeBooksRepository = new FakesBooksRepository()
    const createAnUser = new CreateUserService(fakeUsersRepository)
    const createABook = new CreateBooksService(fakeBooksRepository)

    await createAnUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    })

    const book = await createABook.execute({
      name: 'A Book',
      author: 'An Author',
      value: 12.5,
      isbn: 73823701,
      publishing: 'The publishing',
    })

    const rentedABook = new RentedBooksService(
      fakeBooksRepository,
      fakeUsersRepository
    )

    const isbn = 234
    const user_email = 'doe@john.com'
    let rented = true

    const rentABook = rentedABook.execute({ isbn, user_email, rented })

    expect(rentABook).rejects.toBeInstanceOf(TypeError)
  })

  it('should not able change status rented a book if book not exists', async () => {
    const fakeUsersRepository = new FakesUserRepository()
    const fakeBooksRepository = new FakesBooksRepository()
    const createAnUser = new CreateUserService(fakeUsersRepository)
    const createABook = new CreateBooksService(fakeBooksRepository)

    const user = await createAnUser.execute({
      name: 'John Doe',
      email: 'john@doe.com',
      password: '123456',
    })

    const book = await createABook.execute({
      name: 'A Book',
      author: 'An Author',
      value: 12.5,
      isbn: 1234,
      publishing: 'The publishing',
    })

    const rentedABook = new RentedBooksService(
      fakeBooksRepository,
      fakeUsersRepository
    )

    let isbn = 4321
    let user_email = user.email

    expect(
      rentedABook.execute({
        isbn,
        user_email,
        rented: true,
      })
    ).rejects.toBeInstanceOf(TypeError)
  })
})
