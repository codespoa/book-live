import { Router, Request, Response } from 'express'

import ensureAuthenticad from '../middleware/ensureAuthenticad'

const usersRouter = Router()

import UsersController from '../controllers/UsersController'
const usersController = new UsersController()

usersRouter.get('/', usersController.index)
usersRouter.post('/', usersController.store)

export default usersRouter
