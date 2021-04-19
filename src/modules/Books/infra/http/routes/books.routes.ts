import { Router } from 'express'

import ensureAuthenticad from '../middleware/ensureAuthenticad'

const booksRouter = Router()

import Validate from '@shared/middlewares/Validate'
import bookValidator from '@shared/validators/Books'

import BooksController from '../controllers/BooksController'
import SearchBooksController from '../controllers/SearchBooksController'
import RentedBooksController from '../controllers/RentedBooksController'

const booksController = new BooksController()
const searchBooksController = new SearchBooksController()
const rentedBooksController = new RentedBooksController()

booksRouter.get('/', ensureAuthenticad, booksController.index)
booksRouter.get('/:isbn', ensureAuthenticad, booksController.show)
booksRouter.post(
  '/',
  ensureAuthenticad,
  Validate(bookValidator.create),
  booksController.store
)
booksRouter.put(
  '/',
  ensureAuthenticad,
  Validate(bookValidator.update),
  booksController.update
)
booksRouter.delete('/:isbn', ensureAuthenticad, booksController.delete)
booksRouter.post(
  '/search',
  ensureAuthenticad,
  Validate(bookValidator.search),
  searchBooksController.search
)
booksRouter.post(
  '/rented',
  ensureAuthenticad,
  Validate(bookValidator.rented),
  rentedBooksController.rented
)

export default booksRouter
