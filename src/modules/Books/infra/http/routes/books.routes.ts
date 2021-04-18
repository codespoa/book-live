import { Router } from 'express'

import ensureAuthenticad from '../middleware/ensureAuthenticad'

const booksRouter = Router()

import BooksController from '../controllers/BooksController'
const booksController = new BooksController()

booksRouter.get('/', ensureAuthenticad, booksController.index)
booksRouter.post('/', ensureAuthenticad, booksController.store)

export default booksRouter
