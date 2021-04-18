import { Router } from 'express'

import ensureAuthenticad from '../middleware/ensureAuthenticad'

const booksRouter = Router()

import BooksController from '../controllers/BooksController'
import SearchBooksController from '../controllers/SearchBooksController'

const booksController = new BooksController()
const searchBooksController = new SearchBooksController()

booksRouter.get('/', ensureAuthenticad, booksController.index)
booksRouter.get('/:isbn', ensureAuthenticad, booksController.show)
booksRouter.post('/', ensureAuthenticad, booksController.store)
booksRouter.put('/', ensureAuthenticad, booksController.update)
booksRouter.delete('/:isbn', ensureAuthenticad, booksController.delete)
booksRouter.post('/search', ensureAuthenticad, searchBooksController.search)

export default booksRouter
