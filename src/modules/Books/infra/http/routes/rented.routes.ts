import { Router } from 'express'
import RentedBooksController from '../controllers/RentedBooksController'
const rentedBooksController = new RentedBooksController()

const rentedRouter = Router()

rentedRouter.post('/', rentedBooksController.create)

export default rentedRouter
