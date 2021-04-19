import { Router } from 'express'

import ensureAuthenticad from '../middleware/ensureAuthenticad'

const booksRouter = Router()

import BooksController from '../controllers/BooksController'
import SearchBooksController from '../controllers/SearchBooksController'
import RentedBooksController from '../controllers/RentedBooksController'

const booksController = new BooksController()
const searchBooksController = new SearchBooksController()
const rentedBooksController = new RentedBooksController()

booksRouter.get('/', ensureAuthenticad, booksController.index)
booksRouter.get('/:isbn', ensureAuthenticad, booksController.show)
booksRouter.post('/', ensureAuthenticad, booksController.store)
booksRouter.put('/', ensureAuthenticad, booksController.update)
booksRouter.delete('/:isbn', ensureAuthenticad, booksController.delete)
booksRouter.post('/search', ensureAuthenticad, searchBooksController.search)
booksRouter.post('/rented', rentedBooksController.rented)

export default booksRouter
