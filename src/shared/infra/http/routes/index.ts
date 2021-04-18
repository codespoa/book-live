import { Router } from 'express'
import usersRouter from '@modules/Users/infra/http/routes/users.routes'
import sessionsRouter from '@modules/Users/infra/http/routes/sessions.routes'
import booksRouter from '@modules/Books/infra/http/routes/books.routes'

const routes = Router()

routes.use('/user', usersRouter)
routes.use('/session', sessionsRouter)
routes.use('/book', booksRouter)

export default routes
