import { Router, Request, Response } from 'express'

import ensureAuthenticad from '../middleware/ensureAuthenticad'

const usersRouter = Router()

import UsersController from '../controllers/UsersController'
const usersController = new UsersController()

usersRouter.get('/', ensureAuthenticad, usersController.index)
usersRouter.post('/', ensureAuthenticad, usersController.store)

export default usersRouter
